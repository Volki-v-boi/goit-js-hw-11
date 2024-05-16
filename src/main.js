// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from './js/pixabay-api.js';

import {
  renderImageCard,
  renderNotFoundMessage,
} from './js/render-functions.js';

const lightbox = new SimpleLightbox('.image-gallery', {
  captionsData: 'alt',
  captionDelay: 250,
});

const searchInput = document.querySelector('#search-input');
const loader = document.querySelector('.loader');
const imagesContainer = document.querySelector('.image-gallery');

function handleSearchSubmit(event) {
  event.preventDefault();
  const searchTerm = searchInput.value;

  loader.style.display = 'block';
  imagesContainer.innerHTML = '';

  searchImages(searchTerm)
    .then(images => {
      if (images.length > 0) {
        images.forEach(image => renderImageCard(image));
        lightbox.refresh();
      } else {
        renderNotFoundMessage();
      }
    })
    .catch(error => {
      console.error('Пошук зображень невдалий', error);
    })

    .finally(() => {
      searchInput.value = '';
      loader.style.display = 'none';
    });
}

document
  .querySelector('#search-form')
  .addEventListener('submit', handleSearchSubmit);
