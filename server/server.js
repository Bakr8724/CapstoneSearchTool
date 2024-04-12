// server.js
//SearchService
//communicates with the Google Custom Search API
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

// Hardcoding API Key and CSE ID directly for testing purposes(had some issues with the .env)
const GOOGLE_API_KEY = 'AIzaSyA_wi0VMCE2qnbbW4JayYXReOwkYBl_EMo';
const CUSTOM_SEARCH_ENGINE_ID = 'f24467f77fa3f49eb';

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
      const results = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
          params: {
              key: GOOGLE_API_KEY,  // Use the hardcoded API key
              cx: CUSTOM_SEARCH_ENGINE_ID,  // Use the hardcoded CSE ID
              q: query
          }
      });
      res.json(results.data);
  } catch (error) {
      console.error('Error performing search:', error);
      if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
      } else if (error.request) {
          console.error(error.request);
      } else {
          console.error('Error', error.message);
      }
      res.status(500).json({ message: 'Search failed', details: error.message });
  }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log("API Key:", GOOGLE_API_KEY);
    console.log("CSE ID:", CUSTOM_SEARCH_ENGINE_ID);
});