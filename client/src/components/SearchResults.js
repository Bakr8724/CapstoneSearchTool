import React from 'react';

const SearchResults = ({ results }) => {
    // Local function identical to the one in SearchComponent for consistency
    const parseHtmlToJsx = (htmlString) => {
        return htmlString.split(/<\/?b>/).map((part, index) => index % 2 === 1 ? <strong key={index}>{part}</strong> : part);
    };

    return (
        <div className="search-results">
            <h2>Results:</h2>
            <div>
                {results.length > 0 ? (
                    results.map((result, index) => (
                        <div key={index} className="result-item">
                            <p>{parseHtmlToJsx(result.htmlTitle)} - <a href={result.link} target='_blank' rel="noopener noreferrer">Link</a></p>
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
