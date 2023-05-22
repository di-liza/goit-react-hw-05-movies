import { axios, API_KEY, BASE_URL } from './index';

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
