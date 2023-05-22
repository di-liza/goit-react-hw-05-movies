import { axios, API_KEY, BASE_URL } from './index';

// return products.find(product => product.id === productId);

export default async function fetchMovieFullInfo(movieId) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export const getMovieById = (movies, productId) => {
  return movies.find(movie => movie.id === productId);
};
