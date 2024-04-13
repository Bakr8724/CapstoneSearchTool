import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './components/SearchResults';
import SearchController from './components/SearchController';
import RefineSearch from './components/RefineSearch';
import ReattemptSearch from './components/ReattemptSearch';

function App() {
  const [results, setResults] = useState([]);  // State to store search results

  return (
    <div className="App">
      <header className="App-header">
        <h1>Logo Here</h1>
      </header>
      <main>
      <div className='search-container'>
        <SearchController setResults={setResults} />
        <div className='button-container'>
        <RefineSearch />
        <ReattemptSearch />
        </div>
      </div>
        <SearchResults results={results} />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
