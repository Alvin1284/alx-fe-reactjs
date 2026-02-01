import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>GitHub User Search</h1>
        <p>Search for GitHub users and view their profiles</p>
      </header>
      
      <main className="app-main">
        {/* Search component will go here */}
        <div className="search-section">
          <p>Search functionality coming soon...</p>
        </div>
        
        {/* Results component will go here */}
        <div className="results-section">
          <p>Results will appear here...</p>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Powered by GitHub API</p>
      </footer>
    </div>
  );
}

export default App;
