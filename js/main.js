// генерация случайного числа, включается максимум и минимум
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if(min < 0) {
    min = min * (-1);
  }
  if(max < 0) {
    max = max * (-1);
  }
  if (max <= min ) {
    max = min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandom (0, 12);

// проверка максимальной длинны строки
// https://www.w3resource.com/javascript/form/string-length.php

const getRange = (text, maxlength) => text.length <= maxlength;

getRange(1, 120);

