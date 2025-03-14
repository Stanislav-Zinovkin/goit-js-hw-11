import { fetchImages } from './pixabay-api';
import {
  renderImg,
  showLoader,
  hideLoader,
  errorMessage,
} from './render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchQuery = event.target['search-text'].value;
  if (!searchQuery) return;

  showLoader();

  try {
    const images = await fetchImages(searchQuery);

    if (images.length === 0) {
      errorMessage();
    } else {
      renderImg(images);
    }
  } catch (error) {
    errorMessage();
  } finally {
    hideLoader();
  }
});
