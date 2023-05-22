import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'servises';

function MovieDetails() {
  const { id } = useParams();
  const filteredMovie = getMovieById(id);
  console.log('filteredMovie:', filteredMovie);

  return (
    <main>
      <img
        src={`https://image.tmdb.org/t/p/w500/${filteredMovie.poster_path}`}
        alt={filteredMovie.title}
      />
      <div>
        <h2>
          Movie - {filteredMovie.original_title} - {id}
        </h2>
        <p>{filteredMovie.overview}</p>
      </div>
    </main>
  );
}

export default MovieDetails;
