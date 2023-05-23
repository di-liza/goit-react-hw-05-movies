// import React, { useState, useEffect } from 'react';
// import { fetchTrendingMovies } from 'servises';
// import { MovieList } from 'components';

// import { Link } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   const getTrandMovies = async () => {
  //     try {
  //       const { results } = await fetchTrendingMovies(1);
  //       setMovies(results);
  //       console.log(results);
  //     } catch (error) {
  //       console.log('error:', error);
  //     }
  //   };
  //   getTrandMovies();
  // }, []);
  // return (
  //   <main>
  //     <h1>Home</h1>
  //     <ul>
  //       {movies.map(movie => {
  //         return (
  //           <li key={movie.id}>
  //             <Link to={`${movie.id}`}>
  //               <h4>{movie.original_title}</h4>
  //             </Link>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </main>
  // );
}

export default Home;
