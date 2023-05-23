import { axios, API_KEY, BASE_URL } from './index';

async function getMovieCast(movieId) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?`, {
      params,
    });
    // console.log('response.data:', response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export default getMovieCast;
