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


// Проверка максимальной длинны строки

const getRange = (stringChecked, maxLength) => stringChecked.length <= maxLength;

getRange(1, 120);

// Генерация случайного числа из массива.

let RandomNumberArray;

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

export {getRandomNumber};
export {getRandomNumberArray};


