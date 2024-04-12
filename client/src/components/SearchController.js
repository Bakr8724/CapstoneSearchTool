//SearchController.js
//FR Perform Search/Enter Search Query
//Captures user input and triggers the search
import React, { useState } from 'react';
import axios from 'axios';  // Import Axios

function SearchController({ setResults }) {  // Accept setResults as a prop to pass results to the ResultPresenter
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/search', {
        params: { query }
      });
      setResults(response.data.items); // Assume the response structure has items
      console.log('Search successful', response.data.items);
    } catch (error) {
      console.error('Search failed:', error);
      alert('Search failed');  // Notify the user that search failed
      setResults([]);  // Reset the results on error to ensure ResultPresenter shows "No results found"
    }
  };

  return (
    <div className="search-controller">
      <input
        type="text"
        placeholder="What are you researching today?"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchController;
