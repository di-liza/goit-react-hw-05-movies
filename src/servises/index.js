import axios from 'axios';

const API_KEY = '5cb4dd4cf3f1476227d92f7c4b196044';
const BASE_URL = 'https://api.themoviedb.org/3';

export { axios, API_KEY, BASE_URL };

export { default as fetchTrendingMovies } from './trandMovies';
export { default as fetchMovieFullInfo } from './findMovie';
export { default as getMovieCast } from './getMovieCast';
export { default as getMovieReviews } from './getMovieReviews';
// export { getMovieById } from './trandMovies';
