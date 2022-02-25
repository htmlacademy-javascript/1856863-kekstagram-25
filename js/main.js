// генерация случайного числа, включается максимум и минимум
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// проверка максимальной длинны строки
// https://www.w3resource.com/javascript/form/string-length.php

function lengthRange(inputtxt, minlength, maxlength)
{
   const userInput = inputtxt.value;
   if(userInput.length >= minlength && userInput.length <= maxlength)
      {
        return true;
      }
   else
      {
        return false;
      }
}
