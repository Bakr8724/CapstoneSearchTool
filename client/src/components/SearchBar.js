import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState(''); // Holds the current search query

  const handleInputChange = (event) => {
    setQuery(event.target.value); // Updates the query state on user input
  };

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log(`Searching for: ${query}`);
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
