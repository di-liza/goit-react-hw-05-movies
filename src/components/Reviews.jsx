import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises';
import { Outlet } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovieReviews(movieId).then(movie => {
      // console.log(movie.results);
      setMovie(movie);
    });
  }, [movieId]);

  return (
    <main>
      {movie && (
        <ul>
          {movie.results.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>Review: {content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {movie && movie.results.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}

      <Outlet />
    </main>
  );
}

export default Reviews;
