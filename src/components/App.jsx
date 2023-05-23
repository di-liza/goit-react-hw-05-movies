import { Routes, Route } from 'react-router-dom';
import { Home, Movies, NotFound, MovieDetails } from '../pages';
import Layout from './Layout';
import Reviews from './Reviews';
import Cast from './Cast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
            <Route />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
