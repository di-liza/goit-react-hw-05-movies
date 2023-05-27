import { axios, API_KEY, BASE_URL } from './index';

async function getMovieFullInfo(movieId) {
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
    return error;
  }
}

export default getMovieFullInfo;
