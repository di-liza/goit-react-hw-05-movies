import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieFullInfo } from 'servises';
import { Link, Outlet } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieFullInfo(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2>{movie.original_title}</h2>
        <p>{movie.overview}</p>
      </div>
      <ul>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        <li>
          <Link to="cast">Cast</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}

export default MovieDetails;

// <main>
//   <img
//     src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//     alt={movie.title}
//   />
//   <div>
//     <h2>
//       {movie.original_title} - {movie.id}
//     </h2>
//     <p>{movie.overview}</p>
//   </div>
// </main>
