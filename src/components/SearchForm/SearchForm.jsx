import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchForm({ filterMovie }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const handleInputChange = ({ target: { value } }) => {
    setSearchParams({ query: value });
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    filterMovie(searchQuery);
    setSearchParams({});
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        onChange={handleInputChange}
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
        value={searchQuery}
        name="movieQuery"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
