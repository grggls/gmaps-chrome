# Chrome Extension to Restore Google Maps Links in Search Results

**Product Title:**
GMaps Link Restorer for Search Results

**Problem Statement:**
Due to compliance with the EU Digital Markets Act (DMA), Google has removed direct links to Google Maps from location/address-based search results for users in the European Economic Area (EEA). This change negatively affects user experience, particularly for those accustomed to quickly accessing Maps for navigation or location research.

**Objective:**
Develop a Chrome extension that restores the functionality of displaying a direct Google Maps link for address or place name searches performed in the Google search engine.

**Target Audience:**
Google Chrome users located in the EEA who frequently use Google Search to find locations or addresses.

**Key Features:**
- Detect when a user performs a location-based search on Google.
- Extract the search query from the URL or search input.
- Generate a direct Google Maps search link using the query:
  `https://www.google.com/maps/search/<encoded_query>`
- Inject this link quickly and visibly into the search results page, near the top.
- Minimal permissions required (read/search page content and modify DOM).

**Non-Goals:**
- Do not modify Google's server-side behavior.
- Do not attempt to bypass geographic detection mechanisms.

**Technical Requirements:**
- Chrome Extension Manifest V3.
- `manifest.json` must define permissions for activeTab and scripting.
- `content.js` will run on `https://www.google.*/*` URLs.
- Script logic will:
  - Wait for page to load.
  - Read search query from DOM or `window.location.search`.
  - Check if query appears to be a location (e.g., presence of common keywords like 'street', 'avenue', postal codes, or GPS coordinates).
  - Create a link to Google Maps using `https://www.google.com/maps/search/<query>`.
  - Inject it cleanly into the search page DOM (e.g., below the search bar or in a fixed floating widget).

**Optional Enhancements (Future Scope):**
- Offer a browser action icon to manually trigger map link creation.
- Provide user settings to toggle placement or enable/disable the plugin.
- Support other search engines (e.g., DuckDuckGo, Bing).

**Success Criteria:**
- A working Chrome plugin that successfully inserts a Google Maps link into location-based searches.
- Minimal performance impact.
- Clean UI integration.

---

**Prompt for Cursor AI:**

> Build a Chrome Extension that restores a direct Google Maps link into Google Search results pages for users in the EU. It should:
>
> - Detect when the user searches for a location or address.
> - Extract the query from the search page.
> - Generate a URL in the form `https://www.google.com/maps/search/<encoded_query>`.
> - Inject that URL as a clickable link near the top of the results page.
>
> Use manifest v3 and content scripts. Keep the code clean and limit permissions to the minimum required (read/search page and modify DOM). The plugin should work on all `google.*` domains.

---

