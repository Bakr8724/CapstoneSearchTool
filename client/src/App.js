import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './components/SearchResults';
import SearchController from './components/SearchController';
import RefineSearch from './components/RefineSearch';
import ReattemptSearch from './components/ReattemptSearch';
import Navbar from './components/Navbar';
           //core css
import ResultsSection from './components/ResultsSection';



function App() {
  const [results, setResults] = useState([]);  // State to store search results

  return (
    <div className="App">
      <main>
      <Navbar className="navbar-row"/>
      <div className='search-container'>
        <SearchController setResults={setResults} />
        <div className='button-container'>
        <RefineSearch />
        <ReattemptSearch />
        </div>
      </div>
        {/* <SearchResults results={results} /> } may remove when SearchResults agreed to be deleted*/}
        <ResultsSection results={results} />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
