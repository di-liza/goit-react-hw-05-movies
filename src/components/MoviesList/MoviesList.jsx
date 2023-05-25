import React from 'react';
import { Link } from 'react-router-dom';

function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map(({ id, original_title, poster_path }) => {
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvkdU-3EFnpFevKRp3gvL-FWiuKKqoec8mxUltwbXZkZn60uvRyVHfLB9Iermy1kZIxY&usqp=CAU';

        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <img
                className="movieCard__img"
                src={poster}
                alt={original_title}
              />
              <h4>{original_title}</h4>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MoviesList;
