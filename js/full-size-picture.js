import {pressEscapeKey} from './util.js';

// Поиск элементов
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const commentsLoader = document.querySelector('.comments-loader');
const socialComments = document.querySelector('.social__comments');
const socialOneComment = document.querySelector('.social__comment');
const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');


// Закрытие модального окна
const closeFullSizePicture = (listener) => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', listener);
};

// pressEscapeKey
const closeModalWindow = (evt) => {
  if (pressEscapeKey(evt)) {
    evt.preventDefault();
    closeFullSizePicture();
  }
};

const closeButtonOnClick = () => {
  closeFullSizePicture(closeModalWindow);
};

// Открытие модального окна
const openFullSizePicture = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  const closeBigPicture = bigPicture.querySelector('.big-picture__cancel');
  closeBigPicture.addEventListener('click', closeButtonOnClick);
  document.addEventListener('keydown', closeButtonOnClick);
};

// Создание и наполнение шаблона картинка+лайки+комментарии+описание
const createFullSizePicture = (photoElement) => {
  const {url, likes, comments, detail} = photoElement;
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = detail;

  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const socialComment = socialOneComment.cloneNode(true);
    const authorAvatar = socialComment.querySelector('.social__picture');
    const authorMessage = socialComment.querySelector('.social__text');

    authorAvatar.src = comment.avatar;
    authorAvatar.alt = comment.name;
    authorMessage.textContent = comment.message;
    fragment.appendChild(socialComment);
  });

  socialComments.innerHTML = '';
  socialComments.appendChild(fragment);

  openFullSizePicture();
};

export {createFullSizePicture};
