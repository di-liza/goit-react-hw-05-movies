import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getMovieFullInfo } from 'servises';
import { MovieDetailsView } from 'components';

function MovieDetails() {
  const location = useLocation();
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getFullInfo = async () => {
      try {
        const data = await getMovieFullInfo(movieId);
        setMovie(data);
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
      <Link to={location.state?.from ?? '/'}>Back to movies</Link>
      {movie && <MovieDetailsView movie={movie} />}
    </>
  );
}

export default MovieDetails;
