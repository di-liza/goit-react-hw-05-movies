import React from 'react';
// import { Link } from 'react-router-dom';
import { MovieItem } from 'components';

function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}

export default MoviesList;
