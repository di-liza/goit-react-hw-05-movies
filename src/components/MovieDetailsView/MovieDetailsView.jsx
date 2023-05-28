import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loader } from 'components';
import placeholder from 'images/no-poster-placeholder.webp';

import { PageElLink, StyledMovieDetailsView } from './MovieDetailsView.styled';

function MovieDetailsView({
  movie: {
    vote_average,
    poster_path,
    backdrop_path,
    title,
    release_date,
    overview,
    genres,
  },
}) {
  const userScore = (vote_average / 10) * 100;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : placeholder;

  const posterBg = backdrop_path
    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
    : '';

  return (
    <StyledMovieDetailsView bgImage={posterBg}>
      <div className="info">
        <div className="info-box">
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <h2>{title}</h2>
            {release_date ? (
              <p>({release_date?.slice(0, 4)})</p>
            ) : (
              '(Unknown year)'
            )}
          </div>
          <h3 className="score">User Score: {Math.round(userScore)}%</h3>
          <h3 className="overview">Overview:</h3>
          {overview ? (
            <p style={{ width: '400px', margin: '10px, 0' }}>{overview}</p>
          ) : (
            'No overview available'
          )}
          <div style={{ marginTop: '50px' }}>
            <h3 className="genres">Genres</h3>
            <ul className="genres-list">
              {genres?.length > 0
                ? genres?.map(({ id, name }) => {
                    return (
                      <li key={id} className="genres-item">
                        <p>{name}</p>
                      </li>
                    );
                  })
                : 'No genre.'}
            </ul>
          </div>
        </div>
        <img className="poster " src={poster} alt={title} />
      </div>

      <div className="additional-info ">
        <p className="add-info__title">Additional information</p>
        <ul className="add-info__list">
          <li>
            <PageElLink to="reviews">Reviews</PageElLink>
          </li>
          <li>
            <PageElLink to="cast">Cast</PageElLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledMovieDetailsView>
  );
}
MovieDetailsView.propTypes = {
  movie: PropTypes.shape({
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
export default MovieDetailsView;
