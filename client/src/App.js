import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  const [results, setResults] = useState([]);  // State to store search results

  return (
    <div className="App">
      <header className="App-header">
        <h1>Logo Here</h1>
      </header>
      <main>
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
