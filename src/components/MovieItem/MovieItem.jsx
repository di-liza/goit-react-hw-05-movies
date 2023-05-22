import React from 'react';

function MovieItem({ title }) {
  return (
    <li>
      <a href="/assets">{title}</a>
    </li>
  );
}

export default MovieItem;
