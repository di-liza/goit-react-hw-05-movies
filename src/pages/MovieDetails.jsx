import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieFullInfo } from 'servises';
import { MovieDetailsView } from 'components';

import { FiArrowLeftCircle } from 'react-icons/fi';
import { BackLink } from '../components/MovieDetailsView/MovieDetailsView.styled';

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
      <BackLink to={location.state?.from ?? '/'}>
        <FiArrowLeftCircle color="#fff" />
        <span>Go back</span>
      </BackLink>
      {movie && <MovieDetailsView movie={movie} />}
    </>
  );
}

export default MovieDetails;
