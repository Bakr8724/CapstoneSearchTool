import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchController from './components/SearchController';
import RefineSearch from './components/RefineSearch';
import ReattemptSearch from './components/ReattemptSearch';
import Navbar from './components/Navbar';
import ResultsSection from './components/ResultsSection';

function App() {
  const [results, setResults] = useState([]);  // State to store search results
  const [filters, setFilters] = useState({ keywords: '', source: '' });  // State to manage filters

  // Function to handle filter application
  const applyFilters = (newFilters) => {
    console.log("Applying filters:", newFilters);
    setFilters(newFilters);  // Update filters state with new values
  }

  return (
    <div className="App">
      <main>
        <Navbar className="navbar-row"/>
        <div className='search-container'>
          <SearchController setResults={setResults} filters={filters} />
          <div className='button-container'>
            <RefineSearch onApplyFilters={applyFilters} />
            <ReattemptSearch />
          </div>
        </div>
        <ResultsSection results={results} />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;