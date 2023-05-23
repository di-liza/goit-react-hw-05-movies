import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieFullInfo } from 'servises';
import { Link, Outlet } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieFullInfo(movieId).then(movie => {
      console.log(movie);
      setMovie(movie);
    });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const {
    vote_average,
    poster_path,
    title,
    original_title,
    release_date,
    overview,
    genres,
  } = movie;

  const userScore = (vote_average / 10) * 100;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvkdU-3EFnpFevKRp3gvL-FWiuKKqoec8mxUltwbXZkZn60uvRyVHfLB9Iermy1kZIxY&usqp=CAU';

  return (
    <main>
      <img src={poster} alt={title} />
      <div>
        <h2>{original_title}</h2>
        <p>({release_date.slice(0, 4)})</p>
        <p>User Score: {Math.round(userScore)}%</p>
        <p>Overview: {overview}</p>
        <p>Genres</p>
        <ul>
          {genres.map(genre => {
            return (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <p>Additional information</p>
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
