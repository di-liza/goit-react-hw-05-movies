import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieReviews } from 'servises';

import { MovieListStyled } from './Reviews.styled';

function Reviews() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const movie = await getMovieReviews(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <main>
      <Outlet />
      {movie && (
        <MovieListStyled>
          {movie.results.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p className="author-rev ">
                  Author: <span>{author}</span>
                </p>
                <p className="author-rev ">
                  Review: <span>{content}</span>
                </p>
              </li>
            );
          })}
        </MovieListStyled>
      )}
      {movie && movie.results.length === 0 && (
        <p style={{ textAlign: 'center' }}>
          We don't have any reviews for this movie.
        </p>
      )}
    </main>
  );
}

export default Reviews;
