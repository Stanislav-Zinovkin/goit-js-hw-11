import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

export const renderImg = images => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;

    const linkElement = document.createElement('a');
    linkElement.href = image.largeImageURL;
    linkElement.appendChild(imgElement);

    gallery.appendChild(imgElement);
  });
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};

export const showLoader = () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'block';
};

export const hideLoader = () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
};

export const errorMessage = () => {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
};
