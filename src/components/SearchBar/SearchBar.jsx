import React from 'react';
import { Form } from './SearchBar.styled';

function SearchBar({ onFormSubmit, onInputChange, inputValue }) {
  return (
    <Form onSubmit={onFormSubmit}>
      <input
        onChange={onInputChange}
        className="movie-search-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
        value={inputValue}
        name="movieQuery"
      />
      <button className="movie-search-button" type="submit">
        Search
      </button>
    </Form>
  );
}

export default SearchBar;
