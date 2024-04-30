import React from 'react';

const ResultsSection = ({ results }) => {
    return(
        <div className='horizontal-scroll-container'>
            <div className='scroll-wrapper'>
                {results.length > 0 ?
                    results.map((item, idx) => {
                        return(
                            <ResultsChild result={item} key={`result-child-${idx}`}/>
                        )
                    })
                    :
                    <p>No results found.</p>
                }
            </div>
        </div>
    );
}

const ResultsChild = ({ result }) => {

    // Local function to replace <b> tags with <strong> for better formatting
    const parseHtmlToJsx = (htmlString) => {
        return htmlString.split(/<\/?b>/).map((part, index) => index % 2 === 1 ? <strong key={index}>{part}</strong> : part);
    };

    const fallbackImageUrl = 'placeholder.png'; 

    //For sites where image nor thumbnail available blank image shown 
    const getImageUrl = (pagemap) => {
        if (pagemap?.cse_image?.[0]?.src) {
            return pagemap.cse_image[0].src;
        } else if (pagemap?.cse_thumbnail?.[0]?.src) {
            return pagemap.cse_thumbnail[0].src;
        }
        return fallbackImageUrl; 
    };

    return (
        <div className='result-container'>
                <p>
                    <a href={result.link} target='_blank'  className="clickable-title">
                        {parseHtmlToJsx(result.htmlTitle)}
                    </a>
                </p>
                <p>{parseHtmlToJsx(result.snippet)}</p>
                <a href={result.link} target='_blank' >
                    <img 
                        src={getImageUrl(result.pagemap)}
                        onError={(e) => {
                            e.target.src = fallbackImageUrl; // Changes src to the blank image if unavailable
                        }}
                        alt="Description Image"
                        className="result-image"
                    />
                </a>
        </div>
    );
}

export default ResultsSection;
