import axios from 'axios';

const API_KEY = '5cb4dd4cf3f1476227d92f7c4b196044';
const BASE_URL = 'https://api.themoviedb.org/3';

export { axios, API_KEY, BASE_URL };

export { default as getTrendingMovies } from './trandMovies';
export { default as getMovieFullInfo } from './movieFullInfo';
export { default as getMovieCast } from './movieCast';
export { default as getMovieReviews } from './movieReviews';
export { default as searchMovie } from './searchMovie';
