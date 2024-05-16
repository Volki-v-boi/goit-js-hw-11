// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

function renderImageCard(image) {
  const card = document.createElement('div');
  card.className = 'image-card';

  const link = document.createElement('a');
  link.classList.add('image-gallery');
  link.href = image.largeImageURL;
  link.setAttribute('data-lightbox', 'image-set');

  // console.log(image.largeImageURL);

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;
  img.className = 'image';

  const infoList = document.createElement('ul');
  infoList.className = 'image-info-list';

  const likesItem = document.createElement('li');
  likesItem.textContent = `Likes: ${image.likes}`;

  const viewsItem = document.createElement('li');
  viewsItem.textContent = `Views: ${image.views}`;

  const commentsItem = document.createElement('li');
  commentsItem.textContent = `Comments: ${image.comments}`;

  const downloadsItem = document.createElement('li');
  downloadsItem.textContent = `Downloads: ${image.downloads}`;

  infoList.appendChild(likesItem);
  infoList.appendChild(viewsItem);
  infoList.appendChild(commentsItem);
  infoList.appendChild(downloadsItem);

  link.appendChild(img);
  card.appendChild(link);
  card.appendChild(infoList);

  document.querySelector('.image-gallery').appendChild(card);
}

function renderNotFoundMessage() {
  iziToast.warning({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}

export { renderImageCard, renderNotFoundMessage };
