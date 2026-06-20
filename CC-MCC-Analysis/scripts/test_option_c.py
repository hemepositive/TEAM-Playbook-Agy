import os
import urllib.request
import zipfile
import pandas as pd

# Verified URL for FY 2025 IPPS Final Rule Tables
url = "https://www.cms.gov/files/zip/fy-2025-ipps-final-rule-tables-6a-6k-and-tables-6p1a-6p4d.zip"
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data_dir = os.path.join(base_dir, "data")
zip_name = os.path.join(data_dir, "fy-2025-ipps-final-rule-tables-6a-6k-and-tables-6p1a-6p4d.zip")
inner_zip_name = "CMS-1808-F Tables 6A-6K v420.zip"
inner_zip = os.path.join(data_dir, inner_zip_name)
target_excel_name = "CMS-1808-F Tables 6A-6J.2 v420.xlsx"
target_excel = os.path.join(data_dir, target_excel_name)

# Custom opener to prevent CMS user-agent blocks
opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0')]

# 1. Download Outer Zip File
if not os.path.exists(zip_name):
    print(f"Downloading {url}...")
    with opener.open(url) as response, open(zip_name, 'wb') as out_file:
        out_file.write(response.read())
    print("Download completed.")
else:
    print(f"{zip_name} already exists.")

# 2. Extract Inner Zip and Master Excel File
if not os.path.exists(target_excel):
    print("Extracting files...")
    with zipfile.ZipFile(zip_name, 'r') as z_out:
        z_out.extract(inner_zip_name, path=data_dir)
    with zipfile.ZipFile(inner_zip, 'r') as z_in:
        z_in.extract(target_excel_name, path=data_dir)
    print("Extraction completed.")
else:
    print(f"{target_excel} already exists.")

# 3. Load Excel and inspect sheet data
if os.path.exists(target_excel):
    print(f"Loading {target_excel}...")
    xls = pd.ExcelFile(target_excel)
    print(f"Sheets: {xls.sheet_names}")
    
    # Print sample data from MCC list (6I) and CC list (6J)
    for sheet in ['6I', '6J']:
        df = pd.read_excel(target_excel, sheet_name=sheet)
        print(f"\n--- First 3 rows of Sheet: {sheet} ---")
        print(df.head(3))
