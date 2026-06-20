import os
import urllib.request
import zipfile
import pandas as pd

# URLs for FY 2025 IPPS Final Rule Selected Data Files (which contain CC/MCC analysis)
url = "https://www.cms.gov/files/zip/fy-2025-ipps-final-rule-selected-data-files.zip"
zip_name = "fy-2025-ipps-final-rule-selected-data-files.zip"
extract_dir = "cms_fy2025_data"

# Custom User-Agent to prevent CMS from blocking automated download
class AppURLopener(urllib.request.FancyURLopener):
    version = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

opener = AppURLopener()

# 1. Download Zip File
if not os.path.exists(zip_name):
    print(f"Downloading {url}...")
    try:
        with opener.open(url) as response, open(zip_name, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print("Download completed.")
    except Exception as e:
        print(f"Error downloading: {e}")
        # Try curl or wget if urllib fails, or fallback to standard urllib
        print("Attempting download via urllib.request.urlretrieve...")
        urllib.request.urlretrieve(url, zip_name)
        print("Download completed via fallback.")

# 2. Extract Zip File
if not os.path.exists(extract_dir):
    print("Extracting files...")
    with zipfile.ZipFile(zip_name, 'r') as zip_ref:
        zip_ref.extractall(extract_dir)
    print("Extraction completed.")

# 3. Locate and load the CC/MCC Frequency Spreadsheet
excel_files = []
for root, dirs, files in os.walk(extract_dir):
    for file in files:
        if file.endswith(".xlsx"):
            excel_files.append(os.path.join(root, file))

print(f"Found Excel files: {excel_files}")

matching_files = [f for f in excel_files if "cc" in f.lower() and "frequency" in f.lower()]
print(f"Found matching Excel files for CC/MCC frequency: {matching_files}")

target_excel = None
if matching_files:
    target_excel = matching_files[0]
elif excel_files:
    target_excel = excel_files[0]

if target_excel:
    print(f"Loading {target_excel}...")
    xls = pd.ExcelFile(target_excel)
    print(f"Sheets: {xls.sheet_names}")
    
    for sheet in xls.sheet_names:
        print(f"\n--- Content of Sheet: {sheet} ---")
        df = pd.read_excel(target_excel, sheet_name=sheet)
        print("Shape:", df.shape)
        print("Columns:", df.columns.tolist())
        print("First 5 rows of data:")
        print(df.head())
else:
    print("No Excel files found.")
