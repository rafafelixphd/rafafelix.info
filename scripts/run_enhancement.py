#!/usr/bin/env python3
"""
Script to enhance publications.basic.json with detailed information
and create publications.detailed.json
"""

import os
import sys
from scholar_details import enhance_publications_with_details

def main():
    # Set working directory to scripts folder
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    input_file = "./publications.basic.json"
    output_file = "./publications.detailed.json"
    
    print("🚀 Starting publication enhancement process...")
    print(f"📂 Working directory: {script_dir}")
    print(f"📥 Input file: {input_file}")
    print(f"📤 Output file: {output_file}")
    
    # Check if input file exists
    if not os.path.exists(input_file):
        print(f"❌ Error: Input file {input_file} not found!")
        sys.exit(1)
    
    # Run enhancement
    try:
        enhance_publications_with_details(input_file, output_file)
        print("\n✅ Enhancement process completed successfully!")
    except Exception as e:
        print(f"\n❌ Error during enhancement: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
