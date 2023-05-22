import React from 'react';
import { MovieItem } from 'components';

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(({ original_title, id }) => {
        return <MovieItem key={id} title={original_title} />;
      })}
    </ul>
  );
}

export default MovieList;
