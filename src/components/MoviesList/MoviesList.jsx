import React, { Suspense } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
// import { MovieItem } from 'components';
import { StyledMovieItem } from '../MovieItem/MovieItem.styled';
import { MovieListStyled } from './MoviesList.styled';
import { Loader } from 'components';

function MoviesList({ movies, path = '' }) {
  const location = useLocation();
  return (
    <MovieListStyled>
      {movies.map(movie => {
        const poster = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvkdU-3EFnpFevKRp3gvL-FWiuKKqoec8mxUltwbXZkZn60uvRyVHfLB9Iermy1kZIxY&usqp=CAU';

        return (
          <StyledMovieItem key={movie.id}>
            <Link to={`${path}${movie.id}`} state={{ from: location }}>
              <img className="movieCard__img" src={poster} alt={movie.title} />
              <h2 className="movieCard__title">{movie.title}</h2>
            </Link>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </StyledMovieItem>
        );
        // return <MovieItem key={movie.id} movie={movie} location={location} />;
      })}
    </MovieListStyled>
  );
}

export default MoviesList;

//  <StyledMovieItem>
//    <Link to={`/movies/${id}`} state={{ from: location }}>
//      <img className="movieCard__img" src={poster} alt={title} />
//      <h2 className="movieCard__title">{title}</h2>
//    </Link>
//    <Suspense fallback={<Loader />}>
//      <Outlet />
//    </Suspense>
//  </StyledMovieItem>;
