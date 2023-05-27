import React from 'react';
import PropTypes from 'prop-types';

import { Form } from './SearchBar.styled';

function SearchBar({ onFormSubmit, onInputChange, inputValue }) {
  return (
    <Form onSubmit={onFormSubmit}>
      <input
        onChange={onInputChange}
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
        value={inputValue}
        name="movieQuery"
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </Form>
  );
}

export default SearchBar;
SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
