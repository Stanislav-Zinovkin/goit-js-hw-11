import { fetchImages } from './js/pixabay-api.js';
import {
  renderImg,
  showLoader,
  hideLoader,
  errorMessage,
} from './js/render-functions.js';

const form = document.querySelector('.form');
form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchQuery = event.target['search-text'].value;
  if (!searchQuery) return;

  showLoader();

  fetchImages(searchQuery)
    .then(images => {
      if (images.length === 0) {
        errorMessage();
      } else {
        renderImg(images);
      }
    })
    .catch(error => {
      errorMessage();
    })
    .finally(() => {
      hideLoader();
    });
});
