import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// !!! Встав сюди свій власний ключ, отриманий на https://pixabay.com/api/docs/
const API_KEY = '57544668-1209ddae8d9a87a524809e053';

/**
 * Виконує HTTP-запит до Pixabay за пошуковим словом query
 * і повертає значення властивості data з відповіді.
 */
export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get('', { params });

  return response.data;
}
