import React from 'react';

const ResultsSection = ({results}) => {
    return(
        <div className='horizontal-scroll-container'>
            {results.length > 0 ?
                results.map((item, idx) => {
                    return(
                        <ResultsChild result={item} key={`result-child${idx}`}/>
                    )
                })
                :
                <p>No results found.</p>
            }
        </div>
    );
}

const ResultsChild = ({result}) => {
    const parseHtmlToJsx = (htmlString) => {
        return htmlString.split(/<\/?b>/).map((part, index) => index % 2 === 1 ? <strong key={index}>{part}</strong> : part);
    };

    return(
        <div className='result-container'>
            <p>{parseHtmlToJsx(result.htmlTitle)} - <a href={result.link} target='_blank' rel="noopener noreferrer">Link</a></p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>        
        </div>
    );
}

export default ResultsSection;
