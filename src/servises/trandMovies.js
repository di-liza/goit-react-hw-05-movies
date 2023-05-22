import { axios } from './index';

const API_KEY = '5cb4dd4cf3f1476227d92f7c4b196044';
const BASE_URL = 'https://api.themoviedb.org/3';

export default async function fetchTrendingMovies(page) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      page: page,
    };
    const response = await axios.get(`${BASE_URL}/trending/movie/day?`, {
      params,
    });

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

let movies = [];
const getTrandMovies = async () => {
  try {
    const { results } = await fetchTrendingMovies(1);
    movies = results;
    // console.log(results);
  } catch (error) {
    console.log('error:', error);
  }
};
getTrandMovies();

export const getMovieById = movieId => {
  return movies.find(movie => movie.id === movieId);
};
