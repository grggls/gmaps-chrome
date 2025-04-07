// Function to check if a query looks like a location
function isLocationQuery(query) {
    const locationIndicators = [
        'street', 'avenue', 'road', 'boulevard', 'lane', 'drive',
        'place', 'square', 'park', 'plaza', 'court', 'circle',
        'building', 'house', 'apartment', 'flat', 'floor',
        'postal', 'zip', 'postcode', 'coordinates', 'gps',
        'latitude', 'longitude', 'address', 'location',
        'beach', 'forest', 'mountain', 'lake', 'river', 'stream', 'sea'
    ];
    
    const queryLower = query.toLowerCase();
    return locationIndicators.some(indicator => queryLower.includes(indicator)) ||
           /^\d+/.test(query) || // Starts with a number (common for addresses)
           /[A-Z]{2}\s*\d{5}/.test(query); // US ZIP code pattern
}

// Function to create and inject the Maps link
function injectMapsLink(searchQuery) {
    // Check if we're on a search results page
    if (!window.location.pathname.includes('/search')) {
        return;
    }

    // Check if the query looks like a location
    if (!isLocationQuery(searchQuery)) {
        return;
    }

    // Create the Maps URL
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}`;

    // Create the link element
    const mapsLink = document.createElement('a');
    mapsLink.href = mapsUrl;
    mapsLink.className = 'gmaps-restorer-link';
    mapsLink.innerHTML = `
        <div class="gmaps-restorer-container">
            <img src="https://maps.gstatic.com/favicon.ico" alt="Maps" class="gmaps-restorer-icon">
            <span>Open in Google Maps</span>
        </div>
    `;

    // Find the search results container
    const searchResults = document.getElementById('search');
    if (searchResults) {
        // Insert the link at the top of the search results
        searchResults.insertBefore(mapsLink, searchResults.firstChild);
    }
}

// Function to extract search query from URL
function getSearchQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('q');
}

// Main function to initialize the extension
function initialize() {
    // Wait for the page to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            const query = getSearchQuery();
            if (query) {
                injectMapsLink(query);
            }
        });
    } else {
        const query = getSearchQuery();
        if (query) {
            injectMapsLink(query);
        }
    }
}

// Start the extension
initialize(); 