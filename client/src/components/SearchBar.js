import React, { useState } from 'react';
import axios from 'axios';  // Import Axios

function SearchBar({ setResults }) {  // Accept setResults as a prop
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/search', {
        params: { query }
      });
      setResults(response.data.items);
      console.log('Search successful', response.data.items);
    } catch (error) {
      console.error('Search failed:', error);
      alert('Search failed');  // Notify the user that search failed
      setResults([]);  // Reset the results on error
    }
  };

  return (
    <div className="search-bar">
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

export default SearchBar;
