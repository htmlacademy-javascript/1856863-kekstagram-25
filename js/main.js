// генерация случайного числа, включается максимум и минимум
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandom (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandom (0, 12);

// проверка максимальной длинны строки
// https://www.w3resource.com/javascript/form/string-length.php

function getRange (text, maxlength) {
  if(text.lenght <= maxlength) {
    return true;
  }
  else
  {
    return false;
  }
}

getRange(1, 120);
