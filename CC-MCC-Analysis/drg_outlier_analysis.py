import pandas as pd
import numpy as np

# Load the dataset
csv_path = "MUP_INP_RY26_P03_V10_DY24_PrvSvc.csv"
print(f"Loading {csv_path}...")
df = pd.read_csv(csv_path)

df.columns = [c.strip() for c in df.columns]
df['DRG_Cd'] = df['DRG_Cd'].astype(str).str.zfill(3)
df['Rndrng_Prvdr_CCN'] = df['Rndrng_Prvdr_CCN'].astype(str).str.replace(r'\.0$', '', regex=True).str.zfill(6)

# Define Huntsville CCN and ESC states
huntsville_ccn = '010039'
esc_states = ['AL', 'KY', 'MS', 'TN']

# Calculate total discharges for denominators
hh_total = df[df['Rndrng_Prvdr_CCN'] == huntsville_ccn]['Tot_Dschrgs'].sum()
esc_total = df[df['Rndrng_Prvdr_State_Abrvtn'].isin(esc_states)]['Tot_Dschrgs'].sum()
nat_total = df['Tot_Dschrgs'].sum()

print(f"Total Inpatient Cases in Dataset:")
print(f"  Huntsville Hospital: {hh_total:,.0f}")
print(f"  ESC Region: {esc_total:,.0f}")
print(f"  Nationwide: {nat_total:,.0f}\n")

# Aggregate discharges by DRG
# 1. Huntsville Hospital
hh_drg = df[df['Rndrng_Prvdr_CCN'] == huntsville_ccn].groupby(['DRG_Cd', 'DRG_Desc'])['Tot_Dschrgs'].sum().reset_index()
hh_drg.rename(columns={'Tot_Dschrgs': 'HH_Cases'}, inplace=True)
hh_drg['HH_%'] = (hh_drg['HH_Cases'] / hh_total) * 100

# 2. ESC Region
esc_drg = df[df['Rndrng_Prvdr_State_Abrvtn'].isin(esc_states)].groupby('DRG_Cd')['Tot_Dschrgs'].sum().reset_index()
esc_drg.rename(columns={'Tot_Dschrgs': 'ESC_Cases'}, inplace=True)
esc_drg['ESC_%'] = (esc_drg['ESC_Cases'] / esc_total) * 100

# 3. National
nat_drg = df.groupby('DRG_Cd')['Tot_Dschrgs'].sum().reset_index()
nat_drg.rename(columns={'Tot_Dschrgs': 'Nat_Cases'}, inplace=True)
nat_drg['Nat_%'] = (nat_drg['Nat_Cases'] / nat_total) * 100

# Merge all three
comparison = pd.merge(hh_drg, esc_drg, on='DRG_Cd', how='outer')
comparison = pd.merge(comparison, nat_drg, on='DRG_Cd', how='outer')
comparison.fillna(0, inplace=True)

# If DRG_Desc is missing due to outer merge, fill it
drg_descriptions = df[['DRG_Cd', 'DRG_Desc']].drop_duplicates().set_index('DRG_Cd')['DRG_Desc'].to_dict()
comparison['DRG_Desc'] = comparison['DRG_Cd'].map(drg_descriptions)

# Calculate metrics
comparison['Diff_vs_Nat_%'] = comparison['HH_%'] - comparison['Nat_%']
comparison['Diff_vs_ESC_%'] = comparison['HH_%'] - comparison['ESC_%']
comparison['Ratio_vs_Nat'] = comparison['HH_%'] / np.where(comparison['Nat_%'] == 0, 1, comparison['Nat_%'])

# 1. Top Over-Represented DRGs (Huntsville % > National %)
print("=== TOP 15 OVER-REPRESENTED DRGs AT HUNTSVILLE HOSPITAL (vs. NATIONAL) ===")
over = comparison.sort_values(by='Diff_vs_Nat_%', ascending=False).head(15)
print(over[['DRG_Cd', 'DRG_Desc', 'HH_Cases', 'HH_%', 'Nat_%', 'Diff_vs_Nat_%', 'Ratio_vs_Nat']].to_string(index=False))

print("\n")

# 2. Top Under-Represented DRGs (Huntsville % < National %)
print("=== TOP 15 UNDER-REPRESENTED DRGs AT HUNTSVILLE HOSPITAL (vs. NATIONAL) ===")
under = comparison.sort_values(by='Diff_vs_Nat_%', ascending=True).head(15)
print(under[['DRG_Cd', 'DRG_Desc', 'HH_Cases', 'HH_%', 'Nat_%', 'Diff_vs_Nat_%', 'Ratio_vs_Nat']].to_string(index=False))

# Save full results to a CSV for completeness
comparison.to_csv("Huntsville_DRG_Outlier_Full_Analysis.csv", index=False)
print("\nFull comparison saved to 'Huntsville_DRG_Outlier_Full_Analysis.csv'")
