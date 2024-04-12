import React, { useState } from 'react';
import './App.css';
import SearchResults from './components/SearchResults';
import SearchController from './components/SearchController';

function App() {
  const [results, setResults] = useState([]);  // State to store search results

  return (
    <div className="App">
      <header className="App-header">
        <h1>Logo Here</h1>
      </header>
      <main>
        <SearchController setResults={setResults} />
        <SearchResults results={results} />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
