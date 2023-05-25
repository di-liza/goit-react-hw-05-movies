import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieFullInfo } from 'servises';
import { MovieDetailsView } from 'components';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getFullInfo = async () => {
      try {
        const data = await getMovieFullInfo(movieId);
        setMovie(data);
        console.log('data:', data);
      } catch (error) {
        console.log(error);
      }
    };
    getFullInfo();
  }, [movieId]);

  if (movie === []) {
    return <div>Loading...</div>;
  }

  return <>{movie && <MovieDetailsView movie={movie} />}</>;
}

export default MovieDetails;
