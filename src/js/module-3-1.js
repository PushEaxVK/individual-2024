// Задача-20
function separateEvenOdd(numbers) {
  const evenArray = numbers.filter(num => num % 2 === 0);
  const OddArray = numbers.filter(num => num % 2 !== 0);
  return evenArray.concat(OddArray);
}
console.log('Задача-20:', separateEvenOdd([1, 2, 3, 4, 5, 6]));

// Задача-21
function cumulativeSum(numbers) {
  let sum = 0;
  return numbers.map(val => {
    sum += val;
    return sum;
  });
}
console.log('Задача-21:', cumulativeSum([1, 2, 3, 4]));

// Задача-22
function uniqueNumbers(numbers) {
  const newArray = [];
  for (number of numbers) {
    if (!newArray.includes(number)) {
      newArray.push(number);
    }
  }
  return newArray;
}
console.log('Задача-22:', uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));

// Задача-23
function mergeUniqueArrays(arr1, arr2) {
  const newArray = [];
  for (number of [...arr1, ...arr2]) {
    if (!newArray.includes(number)) {
      newArray.push(number);
    }
  }
  return newArray;
}
console.log('Задача-23:', mergeUniqueArrays([1, 2, 3], [3, 4, 5]));

// Задача-24
function averageOfNeighbors(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let sum = numbers[i];
    let count = 1;

    if (i > 0) {
      sum += numbers[i - 1];
      count++;
    }
    if (i < numbers.length - 1) {
      sum += numbers[i + 1];
      count++;
    }
    newNumbers.push(sum / count);
  }
  return newNumbers;
}
console.log('Задача-24:', averageOfNeighbors([1, 2, 3, 4, 5]));

// Задача-25
function sortArray(numbers, ascending = true) {
  return numbers.toSorted((a, b) => a - b);
}
console.log('Задача-25:', sortArray([5, 3, 8, 1], true)); // В порядку збільшення
console.log('Задача-25:', sortArray([5, 3, 8, 1], false)); // В порядку зменшення

// Задача-26
function sortStringsByLength(strings) {
  return strings.toSorted((a, b) => a.length - b.length);
}
console.log(
  'Задача-26:',
  sortStringsByLength(['apple', 'banana', 'kiwi', 'cherry']),
);
