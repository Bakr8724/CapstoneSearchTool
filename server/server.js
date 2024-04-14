// server.js
// SearchService communicates with the Google Custom Search API
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

// Hardcoding API Key and CSE ID directly for testing purposes (had some issues with the .env)
const GOOGLE_API_KEY = 'AIzaSyA_wi0VMCE2qnbbW4JayYXReOwkYBl_EMo';
const CUSTOM_SEARCH_ENGINE_ID = 'f24467f77fa3f49eb';

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/search', async (req, res) => {
    const { query, keywords, source } = req.query;
    console.log("Received parameters:", { query, keywords, source });
    try {
        let allItems = [];
        let currentPageIndex = 1;

        // Fetch results from Google Custom Search
        let results = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
            params: {
                key: GOOGLE_API_KEY,
                cx: CUSTOM_SEARCH_ENGINE_ID,
                q: query,
                start: currentPageIndex
            }
        });

        allItems = results.data.items;

        // Attempt to fetch more data if more pages exist, limit to 5 pages
        while (results.data.queries.nextPage && currentPageIndex <= 50) {
            currentPageIndex += 10;  // Each page in Google Custom Search typically has 10 results
            if (currentPageIndex > 50) break;  // Limit to first 50 results to manage quota usage
            results = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
                params: {
                    key: GOOGLE_API_KEY,
                    cx: CUSTOM_SEARCH_ENGINE_ID,
                    q: query,
                    start: currentPageIndex
                }
            });
            allItems = allItems.concat(results.data.items);
        }

        // Apply filters if provided
        if (keywords || source) {
            allItems = allItems.filter(item => {
                return (!keywords || item.snippet.toLowerCase().includes(keywords.toLowerCase())) &&
                       (!source || item.displayLink.toLowerCase().includes(source.toLowerCase()));
            });
        }

        res.json({ items: allItems });
    } catch (error) {
        console.error('Error performing search:', error.message);
        res.status(500).json({
            message: 'Search failed',
            details: error.response ? error.response.data : (error.message || 'No additional error information')
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log("API Key:", GOOGLE_API_KEY);
    console.log("CSE ID:", CUSTOM_SEARCH_ENGINE_ID);
});