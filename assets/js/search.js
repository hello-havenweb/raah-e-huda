/*
========================================
RAAH-E-HUDA - SEARCH FUNCTIONALITY
Client-Side Search (Future: Algolia/Meilisearch)
========================================

FEATURES:
- Instant search
- Debounced input
- Result highlighting
- Keyboard navigation
- Mobile-friendly

FUTURE:
- Integrate with Algolia or Meilisearch
- Full-text search
- Filters by category
========================================
*/

class SearchHandler {
    constructor() {
        this.searchInput = document.querySelector('.search-input');
        this.searchResults = document.querySelector('.search-results');
        this.searchData = []; // Will be populated from API/JSON
        
        if (this.searchInput) {
            this.init();
        }
    }
    
    init() {
        this.searchInput.addEventListener('input', this.debounce((e) => {
            this.handleSearch(e.target.value);
        }, 300));
        
        this.searchInput.addEventListener('focus', () => {
            this.searchResults.classList.add('active');
        });
        
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.searchResults.classList.remove('active');
            }
        });
    }
    
    handleSearch(query) {
        if (query.length < 2) {
            this.clearResults();
            return;
        }
        
        const results = this.search(query);
        this.displayResults(results, query);
    }
    
    search(query) {
        // Implement actual search logic
        // For now, return empty array
        return [];
    }
    
    displayResults(results, query) {
        if (results.length === 0) {
            this.searchResults.innerHTML = '<p>No results found</p>';
            return;
        }
        
        const html = results.map(result => `
            <a href="${result.url}" class="search-result-item">
                <h4>${this.highlightMatch(result.title, query)}</h4>
                <p>${this.highlightMatch(result.description, query)}</p>
            </a>
        `).join('');
        
        this.searchResults.innerHTML = html;
    }
    
    highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    
    clearResults() {
        this.searchResults.innerHTML = '';
    }
    
    debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
}

// Initialize
new SearchHandler();
