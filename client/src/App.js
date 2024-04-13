import React, { useState } from 'react';
import './App.css';
import SearchResults from './components/SearchResults';
import SearchController from './components/SearchController';
import Navbar from './components/Navbar';
           //core css
import ResultsSection from './components/ResultsSection';



function App() {
  const [results, setResults] = useState([]);  // State to store search results

  return (
    <div className="App">
      <main>
        <Navbar />
        <SearchController setResults={setResults} />
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
