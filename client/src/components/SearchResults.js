//ResultPresenter
//FR: Display Search Results
// It's responsible for the presentation layer, taking processed data and rendering them for the user.
import React from 'react';

//may delete this as ResultsSection handles this and styling

// Local function to replace <b> tags with <strong> for better formatting
const parseHtmlToJsx = (htmlString) => {
    return htmlString.split(/<\/?b>/).map((part, index) => index % 2 === 1 ? <strong key={index}>{part}</strong> : part);
};

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <div className="search-results">
      <h2>Results:</h2>
      {results.length > 0 ? (
        results.map((result, index) => (
          <div key={index} className="result-item">
            {/* Parse HTML title to JSX */}
            <p>{parseHtmlToJsx(result.htmlTitle)} - <a href={result.link} target='_blank' >Link</a></p>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;


