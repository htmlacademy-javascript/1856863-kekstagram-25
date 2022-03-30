import {createFullSizePicture} from './full-size-picture.js';

const pictureBase = (photos) => {
  // Поиск и создание фрагмента шаблона
  const galleryUsersPhotos = document.querySelector('.pictures');
  const templateFragment = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  // Наполнение шаблона миниатюра+лайки+комментарии.
  photos.forEach((photoElement) => {
    const {url, likes, comments} = photoElement;
    const photoTemplate = templateFragment.cloneNode(true);
    photoTemplate.querySelector('.picture__img').src = url;
    photoTemplate.querySelector('.picture__likes').textContent = likes;
    photoTemplate.querySelector('.picture__comments').textContent = comments.length;

    photoTemplate.addEventListener('click', () => {
      createFullSizePicture(photoElement);
    });

    fragment.appendChild(photoTemplate);
  });

  galleryUsersPhotos.appendChild(fragment);
};

export {pictureBase};
