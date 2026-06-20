import pandas as pd
import numpy as np

# Load the dataset
csv_path = "MUP_INP_RY26_P03_V10_DY24_PrvSvc.csv"
print(f"Loading {csv_path}...")
df = pd.read_csv(csv_path)

# Normalize column names and values
df.columns = [c.strip() for c in df.columns]
df['DRG_Cd'] = df['DRG_Cd'].astype(str).str.zfill(3)

# Define TEAM families
team_families = {
    'LEJR': {
        'desc': 'Lower Extremity Joint Replacement',
        'mcc': ['469', '521'],
        'cc': [], # LEJR is a 2-tier DRG family (MCC / None)
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
        'cc': [], # CABG is 2-tier (MCC / None)
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
        # Corrected groupings for Spinal Fusion (excludes 402 as it has no severity tiers)
        'mcc': ['426', '429', '447', '450', '471'],
        'cc': ['427', '472'],
        'none': ['428', '430', '448', '451', '473']
    }
}

# Collect all TEAM DRGs
all_team_drgs = []
drg_to_family = {}
drg_to_tier = {}

for family, info in team_families.items():
    all_team_drgs.extend(info['mcc'] + info['cc'] + info['none'])
    for code in info['mcc']:
        drg_to_family[code] = family
        drg_to_tier[code] = 'MCC'
    for code in info['cc']:
        drg_to_family[code] = family
        drg_to_tier[code] = 'CC'
    for code in info['none']:
        drg_to_family[code] = family
        drg_to_tier[code] = 'None'

# Filter df for TEAM DRGs
df_team = df[df['DRG_Cd'].isin(all_team_drgs)].copy()
df_team['Family'] = df_team['DRG_Cd'].map(drg_to_family)
df_team['Tier'] = df_team['DRG_Cd'].map(drg_to_tier)

print(f"Total TEAM encounters in dataset: {df_team['Tot_Dschrgs'].sum():,.0f}")

# 1. National Analysis
print("\n=== NATIONWIDE BENCHMARKS ===")
national_summary = []
for family, info in team_families.items():
    df_fam = df_team[df_team['Family'] == family]
    total_discharges = df_fam['Tot_Dschrgs'].sum()
    
    mcc_discharges = df_fam[df_fam['Tier'] == 'MCC']['Tot_Dschrgs'].sum()
    cc_discharges = df_fam[df_fam['Tier'] == 'CC']['Tot_Dschrgs'].sum()
    none_discharges = df_fam[df_fam['Tier'] == 'None']['Tot_Dschrgs'].sum()
    
    mcc_rate = (mcc_discharges / total_discharges) * 100 if total_discharges > 0 else 0
    cc_rate = (cc_discharges / total_discharges) * 100 if total_discharges > 0 else 0
    none_rate = (none_discharges / total_discharges) * 100 if total_discharges > 0 else 0
    
    print(f"\n{info['desc']} (Total Discharges: {total_discharges:,.0f})")
    print(f"  MCC Rate: {mcc_rate:.2f}% ({mcc_discharges:,.0f} cases)")
    if info['cc']:
        print(f"  CC Rate:  {cc_rate:.2f}% ({cc_discharges:,.0f} cases)")
    print(f"  None Rate: {none_rate:.2f}% ({none_discharges:,.0f} cases)")
    
    national_summary.append({
        'Family': family,
        'Description': info['desc'],
        'Total_Discharges': total_discharges,
        'MCC_Rate': mcc_rate,
        'CC_Rate': cc_rate if info['cc'] else np.nan,
        'None_Rate': none_rate
    })

# 2. State-Level Analysis (Alabama)
print("\n=== ALABAMA STATE BENCHMARKS ===")
df_al = df_team[df_team['Rndrng_Prvdr_State_Abrvtn'] == 'AL']
print(f"Total Alabama TEAM encounters: {df_al['Tot_Dschrgs'].sum():,.0f}")

al_summary = []
for family, info in team_families.items():
    df_fam = df_al[df_al['Family'] == family]
    total_discharges = df_fam['Tot_Dschrgs'].sum()
    
    mcc_discharges = df_fam[df_fam['Tier'] == 'MCC']['Tot_Dschrgs'].sum()
    cc_discharges = df_fam[df_fam['Tier'] == 'CC']['Tot_Dschrgs'].sum()
    none_discharges = df_fam[df_fam['Tier'] == 'None']['Tot_Dschrgs'].sum()
    
    mcc_rate = (mcc_discharges / total_discharges) * 100 if total_discharges > 0 else 0
    cc_rate = (cc_discharges / total_discharges) * 100 if total_discharges > 0 else 0
    none_rate = (none_discharges / total_discharges) * 100 if total_discharges > 0 else 0
    
    print(f"\n{info['desc']} (Total Alabama Discharges: {total_discharges:,.0f})")
    print(f"  MCC Rate: {mcc_rate:.2f}% ({mcc_discharges:,.0f} cases)")
    if info['cc']:
        print(f"  CC Rate:  {cc_rate:.2f}% ({cc_discharges:,.0f} cases)")
    print(f"  None Rate: {none_rate:.2f}% ({none_discharges:,.0f} cases)")
    
    al_summary.append({
        'Family': family,
        'Description': info['desc'],
        'Total_Discharges': total_discharges,
        'MCC_Rate': mcc_rate,
        'CC_Rate': cc_rate if info['cc'] else np.nan,
        'None_Rate': none_rate
    })

# 3. Provider-Level Comparison in Alabama for Bowel Procedures & LEJR
print("\n=== TOP ALABAMA PROVIDERS COMPARISON ===")
for family in ['LEJR', 'Bowel']:
    info = team_families[family]
    print(f"\nTop Providers in Alabama for {info['desc']}:")
    df_fam_al = df_al[df_al['Family'] == family]
    
    # Group by Provider Name & CCN
    providers = df_fam_al.groupby(['Rndrng_Prvdr_CCN', 'Rndrng_Prvdr_Org_Name']).agg(
        Total_Discharges=('Tot_Dschrgs', 'sum')
    ).reset_index()
    
    # Filter for providers with at least 15 discharges in this category
    providers = providers[providers['Total_Discharges'] >= 15]
    
    prov_details = []
    for idx, row in providers.iterrows():
        ccn = row['Rndrng_Prvdr_CCN']
        org_name = row['Rndrng_Prvdr_Org_Name']
        total_p = row['Total_Discharges']
        
        df_p = df_fam_al[df_fam_al['Rndrng_Prvdr_CCN'] == ccn]
        
        mcc_p = df_p[df_p['Tier'] == 'MCC']['Tot_Dschrgs'].sum()
        cc_p = df_p[df_p['Tier'] == 'CC']['Tot_Dschrgs'].sum()
        none_p = df_p[df_p['Tier'] == 'None']['Tot_Dschrgs'].sum()
        
        mcc_rate = (mcc_p / total_p) * 100
        cc_rate = (cc_p / total_p) * 100
        none_rate = (none_p / total_p) * 100
        
        prov_details.append({
            'CCN': ccn,
            'Name': org_name,
            'Discharges': total_p,
            'MCC_Rate': mcc_rate,
            'CC_Rate': cc_rate if info['cc'] else np.nan,
            'None_Rate': none_rate
        })
        
    df_provs = pd.DataFrame(prov_details)
    if not df_provs.empty:
        df_provs = df_provs.sort_values(by='Discharges', ascending=False)
        print(df_provs.to_string(index=False))
    else:
        print("No Alabama providers met the threshold of >= 15 discharges.")
