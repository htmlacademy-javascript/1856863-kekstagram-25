// Поиск элементов
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const closeBigPicture = bigPicture.querySelector('.big-picture__cancel');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const commentsLoader = document.querySelector('.comments-loader');
const socialComments = document.querySelector('.social__comments');
const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');

// Открытие модального окна
const openFullSizePicture = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

// Закрытие модального окна
const closeFullSizePicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

// Создание и наполнение шаблона картинка+лайки+комментарии+описание
const createFullSizePicture = (photoElement) => {
  const {url, likes, comments, detail} = photoElement;
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = detail;

  const fragment = document.createDocumentFragment();

  
};
