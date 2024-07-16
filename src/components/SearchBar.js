
import React, { useState } from 'react';
import '../App.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Buscar películas..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} className="search-bar__button">Buscar</button>
    </div>
  );
}

export default SearchBar;
