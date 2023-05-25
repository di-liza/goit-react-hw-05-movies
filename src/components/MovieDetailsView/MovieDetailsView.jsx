import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  StyledMovieDetailsView,
  AdditionalInfo,
} from './MovieDetailsView.styled';

function MovieDetailsView({
  movie: {
    vote_average,
    poster_path,
    backdrop_path,
    title,
    original_title,
    release_date,
    overview,
    genres,
  },
}) {
  const userScore = (vote_average / 10) * 100;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvkdU-3EFnpFevKRp3gvL-FWiuKKqoec8mxUltwbXZkZn60uvRyVHfLB9Iermy1kZIxY&usqp=CAU';

  const posterBg = backdrop_path
    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
    : '';

  return (
    <main>
      <StyledMovieDetailsView>
        <div className="movie-details__bg">
          <img className="movie-details__bg-img" src={posterBg} alt="" />
        </div>

        <div className="movie-details__info">
          <div className="info-box">
            <h2>{original_title}</h2>
            <p>({release_date?.slice(0, 4)})</p>
            <p>User Score: {Math.round(userScore)}%</p>
            <p className="movie-details__info-overview">Overview: {overview}</p>
            <div>
              <p>Genres</p>
              <ul>
                {genres?.map(({ id, name }) => {
                  return (
                    <li key={id}>
                      <p>{name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <img className="movie-details__poster " src={poster} alt={title} />
        </div>
        <AdditionalInfo>
          <p>Additional information</p>
          <ul className="movie-details__additional-info">
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
            <li>
              <Link to="cast">Cast</Link>
            </li>
          </ul>
        </AdditionalInfo>
      </StyledMovieDetailsView>

      <Outlet />
    </main>
  );
}

export default MovieDetailsView;
