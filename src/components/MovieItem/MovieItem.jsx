import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMovieItem } from './MovieItem.styled';

function MovieItem({ movie: { id, original_title, poster_path }, location }) {
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvkdU-3EFnpFevKRp3gvL-FWiuKKqoec8mxUltwbXZkZn60uvRyVHfLB9Iermy1kZIxY&usqp=CAU';

  return (
    <StyledMovieItem>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img className="movieCard__img" src={poster} alt={original_title} />
        <h2 className="movieCard__title">{original_title}</h2>
      </Link>
    </StyledMovieItem>
  );
}

export default MovieItem;
