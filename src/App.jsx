import './App.css';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(
        `https://wikipedia.org/wiki/${encodeURIComponent(searchQuery)}`,
        '_blank'
      );
      setSearchQuery('');
    }
  };

  return (
    <div className="App">
      <div className="search-bar-container">
        <form onSubmit={handleSearch} className="wikipedia-search">
          <input
            type="text"
            placeholder="Rechercher sur Wikipedia..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Rechercher</button>
        </form>
      </div>
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
