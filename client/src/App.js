import React from 'react';
import './App.css'; // Include the main stylesheet

// This is the search bar component where users will input their search queries
function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="What are you researching today?" />
      <button>Search</button>
    </div>
  );
}

// This component will be used to display search results
function SearchResults() {
  // For now, we'll just display some placeholder content
  return (
    <div className="search-results">
      <h2>Results:</h2>
      {/* Replace this with dynamic content later */}
      <div className="result-item">Result 1</div>
      <div className="result-item">Result 2</div>
      <div className="result-item">Result 3</div>
    </div>
  );
}

// This will hold the main structure of our application
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Some Logo */}
        <h1>Logo Here</h1>
      </header>
      <main>
        <SearchBar />
        <SearchResults />
        {/* additional components as needed */}
      </main>
      <footer>
        {/*footer content here */}
      </footer>
    </div>
  );
}

export default App;
