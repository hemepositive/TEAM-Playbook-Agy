import pandas as pd
import numpy as np

import os

# Load the dataset
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
csv_path = os.path.join(base_dir, "data", "MUP_INP_RY26_P03_V10_DY24_PrvSvc.csv")
if not os.path.exists(csv_path):
    csv_path = "MUP_INP_RY26_P03_V10_DY24_PrvSvc.csv"
print(f"Loading {csv_path}...")
df = pd.read_csv(csv_path)

df.columns = [c.strip() for c in df.columns]
df['DRG_Cd'] = df['DRG_Cd'].astype(str).str.zfill(3)

# Define TEAM families with corrected spinal fusion DRG mapping
team_families = {
    'LEJR': {
        'desc': 'Lower Extremity Joint Replacement',
        'mcc': ['469', '521'],
        'cc': [],
        'none': ['470', '522']
    },
    'SHFFT': {
        'desc': 'Surgical Hip & Femur Fracture Treatment',
        'mcc': ['480'],
        'cc': ['481'],
        'none': ['482']
    },
    'CABG': {
        'desc': 'Coronary Artery Bypass Graft',
        'mcc': ['231', '233', '235'],
        'none': ['232', '234', '236']
    },
    'Bowel': {
        'desc': 'Major Bowel Procedure',
        'mcc': ['329'],
        'cc': ['330'],
        'none': ['331']
    },
    'Spine': {
        'desc': 'Spinal Fusion',
        'mcc': ['426', '429', '447', '450', '471'],
        'cc': ['427', '472'],
        'none': ['428', '430', '448', '451', '473']
    }
}

all_team_drgs = []
drg_to_family = {}
drg_to_tier = {}

for family, info in team_families.items():
    all_team_drgs.extend(info['mcc'] + info.get('cc', []) + info['none'])
    for code in info['mcc']:
        drg_to_family[code] = family
        drg_to_tier[code] = 'MCC'
    for code in info.get('cc', []):
        drg_to_family[code] = family
        drg_to_tier[code] = 'CC'
    for code in info['none']:
        drg_to_family[code] = family
        drg_to_tier[code] = 'None'

df_team = df[df['DRG_Cd'].isin(all_team_drgs)].copy()
df_team['Family'] = df_team['DRG_Cd'].map(drg_to_family)
df_team['Tier'] = df_team['DRG_Cd'].map(drg_to_tier)

# Format CCNs as strings
df_team['Rndrng_Prvdr_CCN'] = df_team['Rndrng_Prvdr_CCN'].astype(str).str.replace(r'\.0$', '', regex=True).str.zfill(6)

# East South Central (ESC) States: AL, KY, MS, TN
esc_states = ['AL', 'KY', 'MS', 'TN']
df_esc = df_team[df_team['Rndrng_Prvdr_State_Abrvtn'].isin(esc_states)].copy()

# Huntsville Hospital is CCN 010039
df_huntsville = df_team[df_team['Rndrng_Prvdr_CCN'] == '010039']

print("=== HUNTSVILLE HOSPITAL (CCN 010039) REGIONAL BENCHMARK REPORT ===")
print(f"Region: East South Central (AL, KY, MS, TN)")

for family, info in team_families.items():
    print(f"\n==========================================")
    print(f"FAMILY: {info['desc']}")
    print(f"==========================================")
    
    # 1. Huntsville Hospital
    df_hh_fam = df_huntsville[df_huntsville['Family'] == family]
    hh_total = df_hh_fam['Tot_Dschrgs'].sum()
    hh_mcc = df_hh_fam[df_hh_fam['Tier'] == 'MCC']['Tot_Dschrgs'].sum()
    hh_cc = df_hh_fam[df_hh_fam['Tier'] == 'CC']['Tot_Dschrgs'].sum() if 'cc' in info else 0
    hh_none = df_hh_fam[df_hh_fam['Tier'] == 'None']['Tot_Dschrgs'].sum()
    
    hh_mcc_rate = (hh_mcc / hh_total) * 100 if hh_total > 0 else 0
    hh_cc_rate = (hh_cc / hh_total) * 100 if hh_total > 0 and 'cc' in info else 0
    hh_none_rate = (hh_none / hh_total) * 100 if hh_total > 0 else 0
    
    # 2. Regional Average (ESC)
    df_esc_fam = df_esc[df_esc['Family'] == family]
    esc_total = df_esc_fam['Tot_Dschrgs'].sum()
    esc_mcc = df_esc_fam[df_esc_fam['Tier'] == 'MCC']['Tot_Dschrgs'].sum()
    esc_cc = df_esc_fam[df_esc_fam['Tier'] == 'CC']['Tot_Dschrgs'].sum() if 'cc' in info else 0
    esc_none = df_esc_fam[df_esc_fam['Tier'] == 'None']['Tot_Dschrgs'].sum()
    
    esc_mcc_rate = (esc_mcc / esc_total) * 100 if esc_total > 0 else 0
    esc_cc_rate = (esc_cc / esc_total) * 100 if esc_total > 0 and 'cc' in info else 0
    esc_none_rate = (esc_none / esc_total) * 100 if esc_total > 0 else 0

    # 3. National Average
    df_nat_fam = df_team[df_team['Family'] == family]
    nat_total = df_nat_fam['Tot_Dschrgs'].sum()
    nat_mcc = df_nat_fam[df_nat_fam['Tier'] == 'MCC']['Tot_Dschrgs'].sum()
    nat_cc = df_nat_fam[df_nat_fam['Tier'] == 'CC']['Tot_Dschrgs'].sum() if 'cc' in info else 0
    nat_none = df_nat_fam[df_nat_fam['Tier'] == 'None']['Tot_Dschrgs'].sum()
    
    nat_mcc_rate = (nat_mcc / nat_total) * 100 if nat_total > 0 else 0
    nat_cc_rate = (nat_cc / nat_total) * 100 if nat_total > 0 and 'cc' in info else 0
    nat_none_rate = (nat_none / nat_total) * 100 if nat_total > 0 else 0

    print(f"Total Discharges: Huntsville={hh_total:,.0f} | Regional={esc_total:,.0f} | National={nat_total:,.0f}")
    if hh_total > 0:
        print(f"  MCC Rate:  Huntsville={hh_mcc_rate:5.2f}% | Regional={esc_mcc_rate:5.2f}% | National={nat_mcc_rate:5.2f}%")
        if 'cc' in info and info['cc']:
            print(f"  CC Rate:   Huntsville={hh_cc_rate:5.2f}% | Regional={esc_cc_rate:5.2f}% | National={nat_cc_rate:5.2f}%")
        print(f"  None Rate: Huntsville={hh_none_rate:5.2f}% | Regional={esc_none_rate:5.2f}% | National={nat_none_rate:5.2f}%")
    else:
        print("  Huntsville Hospital has no reported cases (suppressed or zero) in this family.")

    # 4. Regional Top Peer Comparison (Hospitals in AL, KY, MS, TN with >= 20 discharges in this category)
    providers = df_esc_fam.groupby(['Rndrng_Prvdr_CCN', 'Rndrng_Prvdr_Org_Name', 'Rndrng_Prvdr_State_Abrvtn']).agg(
        Total_Discharges=('Tot_Dschrgs', 'sum')
    ).reset_index()
    
    # Filter for peers with >= 20 cases
    peers = providers[providers['Total_Discharges'] >= 20]
    
    peer_details = []
    for idx, row in peers.iterrows():
        ccn = row['Rndrng_Prvdr_CCN']
        name = row['Rndrng_Prvdr_Org_Name']
        state = row['Rndrng_Prvdr_State_Abrvtn']
        p_total = row['Total_Discharges']
        
        df_p = df_esc_fam[df_esc_fam['Rndrng_Prvdr_CCN'] == ccn]
        p_mcc = df_p[df_p['Tier'] == 'MCC']['Tot_Dschrgs'].sum()
        p_cc = df_p[df_p['Tier'] == 'CC']['Tot_Dschrgs'].sum() if 'cc' in info else 0
        p_none = df_p[df_p['Tier'] == 'None']['Tot_Dschrgs'].sum()
        
        p_mcc_rate = (p_mcc / p_total) * 100
        p_cc_rate = (p_cc / p_total) * 100 if 'cc' in info else 0
        p_none_rate = (p_none / p_total) * 100
        
        peer_details.append({
            'CCN': ccn,
            'Name': name[:35],
            'State': state,
            'Cases': p_total,
            'MCC%': p_mcc_rate,
            'CC%': p_cc_rate if 'cc' in info else np.nan,
            'None%': p_none_rate
        })
    
    df_peers = pd.DataFrame(peer_details)
    if not df_peers.empty:
        df_peers = df_peers.sort_values(by='Cases', ascending=False)
        print(f"\nRegional Peer Rankings (Showing top 10 by case volume):")
        cols = ['CCN', 'Name', 'State', 'Cases', 'MCC%', 'None%'] if 'cc' not in info or not info['cc'] else ['CCN', 'Name', 'State', 'Cases', 'MCC%', 'CC%', 'None%']
        print(df_peers[cols].head(10).to_string(index=False))
