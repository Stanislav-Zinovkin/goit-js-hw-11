import iziToast from 'izitoast';

export const renderImg = images => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;
    gallery.appendChild(imgElement);
  });
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
