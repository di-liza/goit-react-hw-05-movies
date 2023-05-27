import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieReviews } from 'servises';

import { ReviewsStyled } from './Reviews.styled';

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
    <ReviewsStyled>
      <Outlet />
      {movie && (
        <ul className="reviews-list">
          {movie.results.map(({ id, author, content }) => {
            return (
              <li className="reviews-item" key={id}>
                <p className="author">
                  Author: <span>{author}</span>
                </p>
                <p className="review-text">
                  Review: <span>{content}</span>
                </p>
              </li>
            );
          })}
        </ul>
      )}
      {movie && movie.results.length === 0 && (
        <p style={{ textAlign: 'center' }}>
          We don't have any reviews for this movie.
        </p>
      )}
    </ReviewsStyled>
  );
}

export default Reviews;
