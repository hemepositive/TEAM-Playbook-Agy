import urllib.request
import os

url = "https://data.cms.gov/sites/default/files/2026-04/828defb5-c9e6-4442-8c1b-f27bc0799daf/MUP_INP_RY26_P03_V10_DY24_PrvSvc.CSV"
output_path = "MUP_INP_RY26_P03_V10_DY24_PrvSvc.csv"

if not os.path.exists(output_path):
    print(f"Downloading {url}...")
    opener = urllib.request.build_opener()
    opener.addheaders = [('User-Agent', 'Mozilla/5.0')]
    try:
        with opener.open(url) as response, open(output_path, 'wb') as out_file:
            # Download in chunks of 1MB
            chunk_size = 1024 * 1024
            downloaded = 0
            while True:
                chunk = response.read(chunk_size)
                if not chunk:
                    break
                out_file.write(chunk)
                downloaded += len(chunk)
                print(f"Downloaded: {downloaded / (1024 * 1024):.2f} MB", end="\r")
        print("\nDownload completed successfully.")
    except Exception as e:
        print(f"\nError downloading: {e}")
else:
    print(f"{output_path} already exists.")

# Inspect the file size and first few lines
if os.path.exists(output_path):
    size_bytes = os.path.getsize(output_path)
    print(f"File size: {size_bytes / (1024 * 1024):.2f} MB")
    print("\n--- First 5 lines of the CSV file ---")
    with open(output_path, 'r', encoding='utf-8', errors='ignore') as f:
        for i in range(5):
            print(f.readline().strip())
