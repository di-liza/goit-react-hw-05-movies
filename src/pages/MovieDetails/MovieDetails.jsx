import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getMovieFullInfo } from 'servises';
import { MovieDetailsView } from 'components';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  const location = useLocation();
  console.log('location:', location);

  useEffect(() => {
    const getFullInfo = async () => {
      try {
        const data = await getMovieFullInfo(movieId);
        setMovie(data);
        // console.log('data:', data);
      } catch (error) {
        console.log(error);
      }
    };
    getFullInfo();
  }, [movieId]);

  if (movie === []) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to="/movies">Back to movies</Link>
      {movie && <MovieDetailsView movie={movie} />}
    </>
  );
}

export default MovieDetails;
