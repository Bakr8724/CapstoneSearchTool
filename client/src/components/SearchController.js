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

  const handleSearch = async (event) => {
    try {
      event.preventDefault();
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
      <form className="search-box" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="What are you researching today?"
          value={query}
          onChange={handleInputChange}
        />
        <img 
          src={process.env.PUBLIC_URL + '/magGlass.png'}   
          className="search-icon" 
          onClick={handleSearch} 
        />
      </form>
    </div>
  );
}

export default SearchController;
