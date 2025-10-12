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

def scrape_scholar_profile(scholar_id):
    url = f"https://scholar.google.com/citations?user={scholar_id}"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Raise exception for bad status codes
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Debug: Check if we found the publications table
        papers_table = soup.find('table', {'id': 'gsc_a_t'})
        if not papers_table:
            print("Warning: Could not find publications table. Google Scholar may have changed its structure.")
            return []
        
        print(f"Found publications table with {len(soup.find_all('tr', class_='gsc_a_tr'))} rows")
    except requests.RequestException as e:
        print(f"Error fetching Google Scholar page: {e}")
        return []
    
    # Parse publication data
    papers = []
    for paper in soup.find_all('tr', class_='gsc_a_tr'):
        try:
            title_elem = paper.find('a', class_='gsc_a_at')
            title = title_elem.text if title_elem else "No title"
            
            # Get authors and venue info
            gray_divs = paper.find_all('div', class_='gs_gray')
            authors = gray_divs[0].text if len(gray_divs) > 0 else "No authors"
            venue = gray_divs[1].text if len(gray_divs) > 1 else "No venue"
            
            # Get year from venue text
            year_match = re.search(r'\b(19|20)\d{2}\b', venue)
            year = int(year_match.group()) if year_match else None
            
            # If no year found, try to extract from title or set to current year
            if year is None:
                year_match_title = re.search(r'\b(19|20)\d{2}\b', title)
                year = int(year_match_title.group()) if year_match_title else datetime.now().year
            
            # Get citations - handle different formats
            citations_elem = paper.find('a', class_='gsc_a_c')
            citations = 0
            if citations_elem:
                citations_text = citations_elem.text.strip()
                # Handle cases like "1*" or "2**" (remove asterisks)
                citations_text = re.sub(r'\*+', '', citations_text)
                if citations_text.isdigit():
                    citations = int(citations_text)
                elif citations_text == '':
                    citations = 0
            
            # Get paper URL
            paper_url = None
            if title_elem and title_elem.get('href'):
                paper_url = f"https://scholar.google.com{title_elem['href']}"
            
            # Determine category from venue
            venue_lower = venue.lower()
            if any(word in venue_lower for word in ['journal', 'j.', 'ieee', 'acm', 'springer']):
                category = 'journal'
            elif any(word in venue_lower for word in ['conference', 'proceedings', 'cvpr', 'iccv', 'eccv', 'neurips', 'icml']):
                category = 'conference'
            elif any(word in venue_lower for word in ['workshop', 'w.']):
                category = 'workshop'
            elif any(word in venue_lower for word in ['arxiv', 'preprint']):
                category = 'preprint'
            else:
                category = 'conference'  # default
            
            # Scrape paper details if URL available
            abstract, doi, arxiv_id = None, None, None
            if paper_url:
                print(f"Scraping details for: {title[:50]}...")
                abstract, doi, arxiv_id = scrape_paper_details(paper_url)
                time.sleep(1)  # Reduced rate limiting
            
            paper_data = {
                'id': f"pub-{uuid.uuid4().hex[:8]}",
                'title': title,
                'authors': authors.split(', '),  # Convert to array
                'venue': venue,
                'year': year,
                'citations': citations,
                'url': paper_url,
                'category': category,
                'abstract': abstract,
                'doi': doi,
                'arxiv_id': arxiv_id
            }
            papers.append(paper_data)
        except Exception as e:
            print(f"Error parsing paper: {e}")
            continue
    
    return papers

def save_publications_to_json(papers, filename="../public/data/publications.json"):
    """Save publications to JSON file"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(papers, f, indent=2, ensure_ascii=False)
    print(f"Saved {len(papers)} publications to {filename}")

def main():
    scholar_id = "nijDcmQAAAAJ"
    print(f"Scraping Google Scholar profile: {scholar_id}")
    
    papers = scrape_scholar_profile(scholar_id)
    print(f"Found {len(papers)} papers")
    
    # Sort by year (newest first)
    papers.sort(key=lambda x: x['year'] or 0, reverse=True)
    
    # Save to JSON
    save_publications_to_json(papers)
    
    # Print summary
    print(f"\nSummary:")
    print(f"- Total papers: {len(papers)}")
    if papers:
        years = [p['year'] for p in papers if p['year']]
        if years:
            print(f"- Years: {min(years)} - {max(years)}")
        print(f"- Total citations: {sum(p['citations'] for p in papers)}")
        
        categories = {}
        for paper in papers:
            cat = paper['category']
            categories[cat] = categories.get(cat, 0) + 1
        print(f"- Categories: {categories}")
    else:
        print("- No papers found")

if __name__ == "__main__":
    main()