// Генерация случайного числа, включается максимум и минимум
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  if(min < 0) {
    min = Math.abs(min);
  }
  max = Math.floor(max);
  if(max < 0) {
    max = Math.abs(max);
  }
  if (max <= min ) {
    max = min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomNumber (0, 12);

// Проверка максимальной длинны строки

const getRange = (stringChecked, maxLength) => stringChecked.length <= maxLength;

getRange(1, 120);

// Генерация случайного числа из массива

let RandomNumberArray;
const getRandomNumberArray = (min,max) => {
  const array = [];
  for (let i = min; i < max; i++) {
    RandomNumberArray = getRandomNumber(min, max);
    if (array.includes(RandomNumberArray) === true) {
      i = i - 1;
    } else {
      if (RandomNumberArray > max === false) {
        array.push(RandomNumberArray);
      }
    }
  }
  return RandomNumberArray;
};

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
      id: i,
      avatar: `img/avatar-${getAvatarsNumber()}.svg`,
      message: COMMENTS[getCommentsNumber()],
      name: NAMES[getNamesNumber()],
    };
    ObjectsArray.push(CommentsObject);
  }
  return ObjectsArray;
};

// Функция, создания объекта фото+комментарий из массива
let id = 1;
const createRandomPost = () => ({
  id: (id++),
  url: `img/avatar-${String(id)}.svg`,
  description: 'Hello, world!',
  likes: getLikesNumber(),
  comments: getObjectsArray()
});

// Создание и вывод массива
const getOutput = () =>
  Array.from({
    length: OBJECT_COUNT,
  }, createRandomPost);
