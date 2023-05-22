import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Movies() {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Movies;
