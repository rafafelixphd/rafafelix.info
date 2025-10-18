import requests
from bs4 import BeautifulSoup
import json
import re
import uuid

def scrape_scholar_basic(scholar_id):
    """Scrape basic publication data from Google Scholar user page"""
    url = f"https://scholar.google.com/citations?user={scholar_id}"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Check if we found the publications table
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
            # Get title and link
            title_elem = paper.find('a', class_='gsc_a_at')
            title = title_elem.text if title_elem else "No title"
            
            # Get authors and venue info
            gray_divs = paper.find_all('div', class_='gs_gray')
            authors = gray_divs[0].text if len(gray_divs) > 0 else "No authors"
            venue = gray_divs[1].text if len(gray_divs) > 1 else "No venue"
            
            # Get year from venue text
            year_match = re.search(r'\b(19|20)\d{2}\b', venue)
            year = int(year_match.group()) if year_match else None
            
            # If no year found, try to extract from title
            if year is None:
                year_match_title = re.search(r'\b(19|20)\d{2}\b', title)
                year = int(year_match_title.group()) if year_match_title else 2024
                year = max(year, 2014)
            
            # Get citations
            citations_elem = paper.find('a', class_='gsc_a_c')
            if not citations_elem:
                # Try alternative selector
                citations_elem = paper.find('td', class_='gsc_a_c')
            
            if citations_elem:
                citations_text = citations_elem.text.strip()
                # Handle cases like "1*" or "2**" (remove asterisks)
                citations_text = re.sub(r'\*+', '', citations_text)
                # Handle empty citations
                if citations_text == '' or citations_text == '-':
                    citations = 0
                else:
                    try:
                        citations = int(citations_text)
                    except ValueError:
                        # If it's not a number, try to extract number from text
                        number_match = re.search(r'\d+', citations_text)
                        citations = int(number_match.group()) if number_match else 0
            
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
            
            paper_data = {
                'id': f"pub-{uuid.uuid4().hex[:8]}",
                'title': title,
                'authors': authors.split(', '),  # Convert to array
                'venue': venue,
                'year': year,
                'citations': citations,
                'url': paper_url,
                'category': category,
                'abstract': None,  # Will be filled by second script
                'doi': None,       # Will be filled by second script
                'arxiv_id': None   # Will be filled by second script
            }
            papers.append(paper_data)
            
            print(f"Parsed: {title[:50]}... - {citations} citations - {year}")
            if citations_elem:
                print(f"  Citation element found: '{citations_elem.text.strip()}'")
            else:
                print(f"  No citation element found for: {title[:30]}...")
            
        except Exception as e:
            print(f"Error parsing paper: {e}")
            continue
    
    return papers

def save_publications_to_json(papers, filename="./publications.basic.json"):
    """Save publications to JSON file"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(papers, f, indent=2, ensure_ascii=False)
    print(f"Saved {len(papers)} publications to {filename}")

def main():
    scholar_id = "nijDcmQAAAAJ"
    print(f"Scraping Google Scholar profile: {scholar_id}")
    
    papers = scrape_scholar_basic(scholar_id)
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
