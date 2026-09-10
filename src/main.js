import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(event) {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  // Перевірка на порожній рядок
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  // Очищаємо попередні результати і показуємо лоадер
  // ПЕРЕД відправкою запиту
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      // Перевірка довжини масиву відбувається саме тут, у main.js
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      // Лоадер ховаємо в будь-якому разі: і при успіху, і при помилці
      hideLoader();
      event.target.reset();
    });
}
