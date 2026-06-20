import os
import urllib.request
import zipfile
import pandas as pd

# Verified URL for FY 2025 IPPS Final Rule Tables
url = "https://www.cms.gov/files/zip/fy-2025-ipps-final-rule-tables-6a-6k-and-tables-6p1a-6p4d.zip"
zip_name = "fy-2025-ipps-final-rule-tables-6a-6k-and-tables-6p1a-6p4d.zip"
inner_zip = "CMS-1808-F Tables 6A-6K v420.zip"
target_excel = "CMS-1808-F Tables 6A-6J.2 v420.xlsx"

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
        z_out.extract(inner_zip)
    with zipfile.ZipFile(inner_zip, 'r') as z_in:
        z_in.extract(target_excel)
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
