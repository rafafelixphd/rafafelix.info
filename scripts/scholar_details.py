import requests
from bs4 import BeautifulSoup
import time
import json
import re
import uuid
from datetime import datetime

def scrape_paper_details(paper_url):
    """Scrape individual paper page for abstract and DOI"""
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    
    try:
        response = requests.get(paper_url, headers=headers)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract abstract - try multiple selectors
        abstract = None
        abstract_selectors = [
            'div.gsh_csp',
            'div.gsh_small',
            'div[data-src]',
            'div.gs_rs',
            'div.gs_ggs'
        ]
        
        for selector in abstract_selectors:
            abstract_elem = soup.select_one(selector)
            if abstract_elem:
                abstract_text = abstract_elem.get_text(strip=True)
                if abstract_text and len(abstract_text) > 50:  # Valid abstract
                    abstract = abstract_text
                    break
        
        # Extract DOI - try multiple methods
        doi = None
        # Method 1: Direct DOI links
        doi_elem = soup.find('a', href=lambda x: x and 'doi.org' in x)
        if doi_elem:
            doi = doi_elem.get_text(strip=True)
        else:
            # Method 2: Look for DOI in text
            doi_pattern = r'10\.\d{4,}/[^\s]+'
            doi_match = re.search(doi_pattern, soup.get_text())
            if doi_match:
                doi = doi_match.group()
        
        # Extract arXiv ID if present
        arxiv_id = None
        arxiv_pattern = r'arXiv:\s*(\d{4}\.\d{4,})'
        arxiv_match = re.search(arxiv_pattern, soup.get_text())
        if arxiv_match:
            arxiv_id = arxiv_match.group(1)
        
        return abstract, doi, arxiv_id
    except Exception as e:
        print(f"Error scraping paper details: {e}")
        return None, None, None

def enhance_publications_with_details(json_file="../public/data/publications.json"):
    """Enhance existing publications with detailed information"""
    
    # Load existing publications
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            publications = json.load(f)
    except FileNotFoundError:
        print(f"Error: {json_file} not found")
        return
    
    if not publications:
        print("No publications found in file")
        return
    
    print(f"Enhancing {len(publications)} publications with detailed information...")
    
    enhanced_count = 0
    for i, pub in enumerate(publications):
        if pub.get('url') and (not pub.get('abstract') or not pub.get('doi')):
            print(f"[{i+1}/{len(publications)}] Scraping details for: {pub['title'][:50]}...")
            
            abstract, doi, arxiv_id = scrape_paper_details(pub['url'])
            
            # Update publication with new details
            if abstract:
                pub['abstract'] = abstract
            if doi:
                pub['doi'] = doi
            if arxiv_id:
                pub['arxiv_id'] = arxiv_id
            
            enhanced_count += 1
            time.sleep(2)  # Rate limiting
    
    # Save enhanced publications
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(publications, f, indent=2, ensure_ascii=False)
    
    print(f"\nEnhanced {enhanced_count} publications")
    print(f"Saved enhanced data to {json_file}")

def main():
    print("Enhancing publications with detailed information...")
    enhance_publications_with_details()

if __name__ == "__main__":
    main()
