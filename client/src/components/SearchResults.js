import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <h2>Results:</h2>
      {results.length > 0 ? (
        results.map((result, index) => (
          <div key={index} className="result-item">{result.title}</div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;