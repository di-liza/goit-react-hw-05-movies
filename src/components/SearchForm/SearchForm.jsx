import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { Form } from './SearchForm.styled';

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
    <Form onSubmit={handleFormSubmit}>
      <input
        onChange={handleInputChange}
        className="movie-search-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
        value={searchQuery}
        name="movieQuery"
      />
      <button className="movie-search-button" type="submit">
        Search
      </button>
    </Form>
  );
}

export default SearchForm;
