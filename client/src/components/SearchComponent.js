import axios from 'axios';
import { useState } from 'react';

function SearchComponent() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/search`, { params: { query } });
            setResults(response.data.items);  // assuming the response structure has items
        } catch (error) {
            console.error('Search error:', error);
        }
    };

// Function to replace <b> tags with <strong> since <b> was faulty in browser
const parseHtmlToJsx = (htmlString) => {
    return htmlString.split(/<\/?b>/).map((part, index) => index % 2 === 1 ? <strong key={index}>{part}</strong> : part);
};

return (
    <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        <div>
            {results.map((item, index) => (
                <div key={index} className="result-item">
                    <p>{parseHtmlToJsx(item.htmlTitle)} - <a href={item.link} target='_blank' >Link</a></p>
                </div>
            ))}
        </div>
    </div>
);
}

export default SearchComponent;