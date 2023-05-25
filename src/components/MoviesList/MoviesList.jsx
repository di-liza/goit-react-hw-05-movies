import React from 'react';
import { MovieItem } from 'components';
import { MovieListStyled } from './MoviesList.styled';

function MoviesList({ movies }) {
  return (
    <MovieListStyled>
      {movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </MovieListStyled>
  );
}

export default MoviesList;
