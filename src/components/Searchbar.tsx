import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value); // Update the search query
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission
    console.log('Search query:', query); // Log the query (replace with actual search logic later)
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      
    </form>
  );
};

export default SearchBar;
