import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieFullInfo } from 'servises';
import { Link, Outlet } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieFullInfo(movieId).then(movie => {
      // console.log(movie);
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
          {genres.map(({ id, name }) => {
            return (
              <li key={id}>
                <p>{name}</p>
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
