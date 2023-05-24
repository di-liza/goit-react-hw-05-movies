import React, { useState, useEffect } from 'react';
import { searchMovie } from 'servises';

function SearchForm() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);
  console.log(movie);

  const handleInputChange = ({ target: { value } }) => {
    setQuery(value);
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    // console.log(movie);
    // setQuery('');
  };

  useEffect(() => {
    if (query !== '') {
      searchMovie(query).then(movie => {
        setMovie(movie);
      });
    }
  }, [query]);

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        onChange={handleInputChange}
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
        value={query}
      />
    </form>
  );
}

export default SearchForm;
