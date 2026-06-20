import pandas as pd
import numpy as np

import os

# Load the dataset
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
csv_path = os.path.join(base_dir, "data", "MUP_INP_RY26_P03_V10_DY24_PrvSvc.csv")
if not os.path.exists(csv_path):
    csv_path = "MUP_INP_RY26_P03_V10_DY24_PrvSvc.csv"
df = pd.read_csv(csv_path)

# Normalize column names and values
df.columns = [c.strip() for c in df.columns]
df['DRG_Cd'] = df['DRG_Cd'].astype(str).str.zfill(3)

# Define TEAM families
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
        'mcc': ['402', '426', '428', '447', '449', '471'],
        'cc': ['427', '429', '448', '450', '472'],
        'none': ['430', '451', '473']
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

# Filter df for TEAM DRGs
df_team = df[df['DRG_Cd'].isin(all_team_drgs)].copy()
df_team['Family'] = df_team['DRG_Cd'].map(drg_to_family)
df_team['Tier'] = df_team['DRG_Cd'].map(drg_to_tier)

# Convert CCN to string to prevent numeric conversion issues
df_team['Rndrng_Prvdr_CCN'] = df_team['Rndrng_Prvdr_CCN'].astype(str).str.replace(r'\.0$', '', regex=True).str.zfill(6)

# Southeast Health Medical Center (CCN 010001)
df_se = df_team[df_team['Rndrng_Prvdr_CCN'] == '010001']
df_al = df_team[df_team['Rndrng_Prvdr_State_Abrvtn'] == 'AL']

print("=== SOUTHEAST HEALTH MEDICAL CENTER (CCN 010001) vs BENCHMARKS ===")

for family, info in team_families.items():
    print(f"\n--- {info['desc']} ---")
    
    # Southeast Health
    df_se_fam = df_se[df_se['Family'] == family]
    se_total = df_se_fam['Tot_Dschrgs'].sum()
    se_mcc = df_se_fam[df_se_fam['Tier'] == 'MCC']['Tot_Dschrgs'].sum()
    se_cc = df_se_fam[df_se_fam['Tier'] == 'CC']['Tot_Dschrgs'].sum() if 'cc' in info else 0
    se_none = df_se_fam[df_se_fam['Tier'] == 'None']['Tot_Dschrgs'].sum()
    
    se_mcc_rate = (se_mcc / se_total) * 100 if se_total > 0 else 0
    se_cc_rate = (se_cc / se_total) * 100 if se_total > 0 and 'cc' in info else 0
    se_none_rate = (se_none / se_total) * 100 if se_total > 0 else 0
    
    # Alabama
    df_al_fam = df_al[df_al['Family'] == family]
    al_total = df_al_fam['Tot_Dschrgs'].sum()
    al_mcc = df_al_fam[df_al_fam['Tier'] == 'MCC']['Tot_Dschrgs'].sum()
    al_cc = df_al_fam[df_al_fam['Tier'] == 'CC']['Tot_Dschrgs'].sum() if 'cc' in info else 0
    al_none = df_al_fam[df_al_fam['Tier'] == 'None']['Tot_Dschrgs'].sum()
    
    al_mcc_rate = (al_mcc / al_total) * 100 if al_total > 0 else 0
    al_cc_rate = (al_cc / al_total) * 100 if al_total > 0 and 'cc' in info else 0
    al_none_rate = (al_none / al_total) * 100 if al_total > 0 else 0

    # National
    df_nat_fam = df_team[df_team['Family'] == family]
    nat_total = df_nat_fam['Tot_Dschrgs'].sum()
    nat_mcc = df_nat_fam[df_nat_fam['Tier'] == 'MCC']['Tot_Dschrgs'].sum()
    nat_cc = df_nat_fam[df_nat_fam['Tier'] == 'CC']['Tot_Dschrgs'].sum() if 'cc' in info else 0
    nat_none = df_nat_fam[df_nat_fam['Tier'] == 'None']['Tot_Dschrgs'].sum()
    
    nat_mcc_rate = (nat_mcc / nat_total) * 100 if nat_total > 0 else 0
    nat_cc_rate = (nat_cc / nat_total) * 100 if nat_total > 0 and 'cc' in info else 0
    nat_none_rate = (nat_none / nat_total) * 100 if nat_total > 0 else 0

    # Print Comparison Table
    print(f"Total Cases: Southeast={se_total:,.0f} | Alabama={al_total:,.0f} | National={nat_total:,.0f}")
    if se_total > 0:
        print(f"  MCC Rate: Southeast={se_mcc_rate:5.2f}% | Alabama={al_mcc_rate:5.2f}% | National={nat_mcc_rate:5.2f}%")
        if 'cc' in info and info['cc']:
            print(f"  CC Rate:  Southeast={se_cc_rate:5.2f}% | Alabama={al_cc_rate:5.2f}% | National={nat_cc_rate:5.2f}%")
        print(f"  None Rate: Southeast={se_none_rate:5.2f}% | Alabama={al_none_rate:5.2f}% | National={nat_none_rate:5.2f}%")
    else:
        print("  Southeast Health has no reported cases (discharges suppressed or zero) in this family.")
