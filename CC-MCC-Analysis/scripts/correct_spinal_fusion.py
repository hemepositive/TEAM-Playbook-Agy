import pandas as pd
import numpy as np

import os

# Load the dataset
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
csv_path = os.path.join(base_dir, "data", "MUP_INP_RY26_P03_V10_DY24_PrvSvc.csv")
if not os.path.exists(csv_path):
    csv_path = "MUP_INP_RY26_P03_V10_DY24_PrvSvc.csv"
df = pd.read_csv(csv_path)

df.columns = [c.strip() for c in df.columns]
df['DRG_Cd'] = df['DRG_Cd'].astype(str).str.zfill(3)

# Correct Spinal Fusion DRG grouping:
# MCC Tier: 426, 429, 447, 450, 471
# CC Tier: 427, 472
# None Tier: 428, 430, 448, 451, 473
# 1-Tier DRG (Excluded from capture rate analysis): 402

spine_mcc = ['426', '429', '447', '450', '471']
spine_cc = ['427', '472']
spine_none = ['428', '430', '448', '451', '473']
spine_all = spine_mcc + spine_cc + spine_none

df_spine = df[df['DRG_Cd'].isin(spine_all)].copy()
drg_to_tier = {}
for code in spine_mcc:
    drg_to_tier[code] = 'MCC'
for code in spine_cc:
    drg_to_tier[code] = 'CC'
for code in spine_none:
    drg_to_tier[code] = 'None'

df_spine['Tier'] = df_spine['DRG_Cd'].map(drg_to_tier)
df_spine['Rndrng_Prvdr_CCN'] = df_spine['Rndrng_Prvdr_CCN'].astype(str).str.replace(r'\.0$', '', regex=True).str.zfill(6)

def calculate_stats(df_data, title):
    total = df_data['Tot_Dschrgs'].sum()
    mcc = df_data[df_data['Tier'] == 'MCC']['Tot_Dschrgs'].sum()
    cc = df_data[df_data['Tier'] == 'CC']['Tot_Dschrgs'].sum()
    none = df_data[df_data['Tier'] == 'None']['Tot_Dschrgs'].sum()
    
    mcc_rate = (mcc / total) * 100 if total > 0 else 0
    cc_rate = (cc / total) * 100 if total > 0 else 0
    none_rate = (none / total) * 100 if total > 0 else 0
    
    print(f"--- {title} ---")
    print(f"Total Cases: {total:,.0f}")
    print(f"  MCC Rate: {mcc_rate:.2f}% ({mcc:,.0f} cases)")
    print(f"  CC Rate:  {cc_rate:.2f}% ({cc:,.0f} cases)")
    print(f"  None Rate: {none_rate:.2f}% ({none:,.0f} cases)")

# National Spinal Fusion Benchmarks
calculate_stats(df_spine, "NATIONAL SPINAL FUSION BENCHMARKS")

# Alabama State Spinal Fusion Benchmarks
df_spine_al = df_spine[df_spine['Rndrng_Prvdr_State_Abrvtn'] == 'AL']
calculate_stats(df_spine_al, "ALABAMA SPINAL FUSION BENCHMARKS")

# UAB Spinal Fusion Benchmarks (CCN 010033)
df_spine_uab = df_spine[df_spine['Rndrng_Prvdr_CCN'] == '010033']
calculate_stats(df_spine_uab, "UAB SPINAL FUSION BENCHMARKS")
