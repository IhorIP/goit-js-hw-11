import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Екземпляр SimpleLightbox створюємо один раз на рівні модуля.
// Кожен елемент .gallery a обгортає картку зображення (див. п. "Markup" в документації)
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

/**
 * Приймає масив images, будує розмітку карток,
 * додає її одним запитом у DOM і оновлює SimpleLightbox.
 */
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>${likes}
              </p>
              <p class="info-item">
                <b>Views</b>${views}
              </p>
              <p class="info-item">
                <b>Comments</b>${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b>${downloads}
              </p>
            </div>
          </a>
        </li>
      `
    )
    .join('');

  // Додаємо всі картки за одну операцію з DOM
  gallery.insertAdjacentHTML('beforeend', markup);

  // Обов'язково оновлюємо lightbox після додавання нових елементів
  lightbox.refresh();
}

/** Очищує вміст контейнера галереї */
export function clearGallery() {
  gallery.innerHTML = '';
}

/** Показує індикатор завантаження */
export function showLoader() {
  loader.classList.remove('is-hidden');
}

/** Приховує індикатор завантаження */
export function hideLoader() {
  loader.classList.add('is-hidden');
}
