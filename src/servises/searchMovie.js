import { axios, API_KEY, BASE_URL } from './index';

async function searchMovie(query, page) {
  try {
    const params = {
      query: query,
      api_key: API_KEY,
      language: 'en-US',
      page,
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
