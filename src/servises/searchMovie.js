import { axios, API_KEY, BASE_URL } from './index';

async function searchMovie(query) {
  try {
    const params = {
      query: query,
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(`${BASE_URL}/search/movie?`, {
      params,
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export default searchMovie;
