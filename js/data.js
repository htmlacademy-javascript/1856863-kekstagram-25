import {getRandomNumber} from './util.js';
import {getRandomNumberArray} from './util.js';


// Массив комментариев

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Массив имен

const NAMES = [
  'Мария',
  'Артём',
  'Екатерина',
  'Александр',
  'Анастасия',
  'Самир',
  'Евгений',
  'Юлия'
];

// Необходимые числовые значения

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MIN_OBJECT = 1;
const MAX_OBJECT = 6;
const OBJECT_COUNT = 25;
let commentsId = 1;

// Функции по генерации случайных чисел по заданным числовым значениям

const getLikesNumber = () => getRandomNumber(MIN_LIKES,MAX_LIKES);
const getCommentsNumber = () => getRandomNumberArray(0, COMMENTS.length-1);
const getNamesNumber = () => getRandomNumberArray(0, NAMES.length-1);
const getAvatarsNumber = () => getRandomNumber(MIN_AVATAR, MAX_AVATAR);
const getObjectsNumber = () => getRandomNumberArray(MIN_OBJECT, MAX_OBJECT);

// Функция, создающая массив объектов комментариев

const getObjectsArray = () => {
  const ObjectsArray = [];
  for (let i = 1; i <= getObjectsNumber(); i++) {
    const CommentsObject = {
      id: commentsId++,
      avatar: `img/avatar-${getAvatarsNumber()}.svg`,
      message: COMMENTS[getCommentsNumber()],
      name: NAMES[getNamesNumber()],
    };
    ObjectsArray.push(CommentsObject);
  }
  return ObjectsArray;
};

// Функция, создания объекта фото+комментарий из массива

let id = 0;
const createRandomPost = () => ({
  id: (id++),
  url: `photos/${String(id)}.jpg`,
  description: 'Hello, world!',
  likes: getLikesNumber(),
  comments: getObjectsArray()
});

// Создание и вывод массива.

const getOutput = () =>
  Array.from({
    length: OBJECT_COUNT,
  }, createRandomPost);

export {getOutput};
