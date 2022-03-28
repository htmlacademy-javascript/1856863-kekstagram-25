const galleryUsersPhotos = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const getPhotoTemplate = (url, likes, comments) => {
  const photoTemplate= templateFragment.cloneNode(true);
  photoTemplate.querySelector('.picture__img').src = url;
  photoTemplate.querySelector('.picture__likes').textContent = likes;
  photoTemplate.querySelector('.picture__comments').textContent = comments.length;
};

const createPhotoTemplate = (photos) => {
  for (let i = 0; i < photos.length; i++) {
    const photoUnit = getPhotoTemplate(photos[i]);
    fragment.appendChild(photoUnit);
  }
  galleryUsersPhotos.appendChild(fragment);
};

export {createPhotoTemplate};
