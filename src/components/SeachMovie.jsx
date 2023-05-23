import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { fetchMovieByName } from 'servises';

function SeachMovie() {
  // const { movieId } = useParams();
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);

  const handleInputChange = event => {
    const value = event.target.value;
    setQuery(value);
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(movie);
    // setQuery('');
  };

  useEffect(() => {
    fetchMovieByName(query).then(movie => {
      setMovie(movie);
      console.log(movie);
    });
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

export default SeachMovie;
