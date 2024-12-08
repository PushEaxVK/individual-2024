'use strict';

// Задача-1
function checkSumbols(str1, str2) {
  return str1[0] === str2[str2.length - 1];
}
console.log('Задача-1:', checkSumbols('ab', 'ba'));

// Задача-2
function checkFirstLetters(str1, str2) {
  return str1[0] === str2[0];
}
console.log('Задача-2:', checkFirstLetters('aa', 'ab'));

// Задача-3
function checkLengths(str1, str2) {
  return str1.length === str2.length;
}
console.log('Задача-3:', checkLengths('123', 'abc'));

// Задача-4
function checkNum(num) {
  return String(num).length % 2 === 0;
}
console.log('Задача-4:', checkNum(1234));

// Задача-5
function checkGreater(num1, num2) {
  return num1 > num2;
}
console.log('Задача-5:', checkGreater(3, 2));

// Задача-6
function checkDivisibility(num1, num2) {
  return num1 % num2 === 0;
}
console.log('Задача-6:', checkDivisibility(4, 2));

// Задача-7
function checkOdd(num) {
  return num % 2 !== 0;
}
console.log('Задача-7:', checkOdd(3));

// Задача-8
function checkUpperCase(str) {
  return str == str.toLowerCase();
}
console.log('Задача-8:', checkUpperCase('aaa'));

// Задача-9
function checkGreaterLength(str1, str2) {
  return str1.length > str2.length;
}
console.log('Задача-9:', checkGreaterLength('aaaa', 'aaa'));

// Задача-12
function checkWhitespace(str) {
  return str.includes(' ');
}
console.log('Задача-12', checkWhitespace('Hello World'));

// Задача-14
function checkPalindrome(str) {
  const newStr = str.split('').reverse().join('');
  return newStr === str;
}
console.log('Задача-14:', checkPalindrome('aba'));

// Задача-15
function checkLessThanOrEqual(num1, num2) {
  return num1 <= num2;
}
console.log('Задача-15:', checkLessThanOrEqual(2, 3));

// Задача-17
function checkVowel(str) {
  switch (str[0]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}
console.log('Задача-17:', checkVowel('abc'));

// Задача-19
function checkEqual(num1, num2) {
  return num1 === num2;
}
console.log('Задача-19:', checkEqual(5, 5));

// Задача-20
function checkNonNegative(num) {
  return num >= 0;
}
console.log('Задача-20:', checkNonNegative(5));

// Задача-21
function checkEvenLength(str) {
  return str.length % 2 == 0;
}
console.log('Задача-21:', checkEvenLength('hell'));

// Задача-22
function checkDivisibilityOfNums(num1, num2) {
  return num1 % 2 == 0 && num2 % 2 !== 0;
}
console.log('Задача-22:', checkDivisibilityOfNums(4, 3));

// Задача-23
function checkInRange(num) {
  return num > 100 && num < 200;
}
console.log('Задача-23:', checkInRange(150));

// Задача-24
function checkLowercaseOnly(str) {
  return checkUpperCase(str);
}
console.log('Задача-24:', checkLowercaseOnly('hello'));

// Задача-25
function checkSubstring(str1, str2) {
  return str2.includes(str1);
}
console.log('Задача-25:', checkSubstring('cat', 'catalog'));

// Задача-26
function checkNegative(num) {
  return num < 0;
}
console.log('Задача-26:', checkNegative(-5));

// Задача-27
function checkDifference(num1, num2) {
  return Math.abs(num1 - num2) > 50;
}
console.log('Задача-27:', checkDifference(10, 70));

// Задача-28
function checkZero(num) {
  return num === 0;
}
console.log('Задача-28:', checkZero(0));

// Задача-29
function checkLastLetterVowel(str) {
  return checkVowel(str.slice(-1));
}
console.log('Задача-29:', checkLastLetterVowel('hello'));

// Задача-30
function checkMultipleOfTen(num) {
  return num % 10 === 0;
}
console.log('Задача-30:', checkMultipleOfTen(20));

// Task 1
function makeRound(num) {
  console.log(
    'Task 1:',
    'floor() ->',
    Math.floor(num),
    'ceil() ->',
    Math.ceil(num),
    'round() ->',
    Math.round(num),
  );
}
makeRound(27.3);
makeRound(27.5);
makeRound(27.9);

// Task 2
function taskTwo() {
  console.log('Task 2');
  console.log(5 > 4); // true
  console.log(10 >= '7'); // true
  console.log('2' > '12'); // true
  console.log('2' < '12'); // false
  console.log('4' == 4); // true
  console.log('6' === 6); // false
  console.log('false' === false); // false
  console.log(1 == true); // true
  console.log(1 === true); // false
  console.log('0' == false); // true
  console.log('0' === false); // fasle
  console.log('Papaya' < 'papaya'); // true
  console.log('Papaya' === 'papaya'); // false
  console.log(undefined == null); // true
  console.log(undefined === null); // false
}
taskTwo();

// Task 3
function formatMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const hoursStr = String(hours).padStart(2, '0');
  const minutesStr = String(minutes).padStart(2, '0');
  return `${hoursStr}:${minutesStr}`;
}
console.log('Task 3:', formatMinutes(76));

// Task 4
const incomingValue = 5;
const defaultValue = 10;
const value =
  incomingValue === undefined || incomingValue === null
    ? defaultValue
    : incomingValue;
console.log('Task 4:', value);

//Kata: Beginner Series #4 Cockroach
// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
// The cockroach is one of the fastest insects.
// Write a function which takes its speed in km per hour
// and returns it in cm per second, rounded down to the
// integer(= floored).
// For example:
//
// 1.08 --> 30
// Note! The input is a Real number (actual type is
// language dependent) and is >= 0.
// The result should be an Integer.
function cockroachSpeed(kilometrsPerHour) {
  const seconds = 3600;
  const centimeters = kilometrsPerHour * 100000;
  const cmPerSecond = Math.floor(centimeters / seconds);
  return cmPerSecond;
}
console.log('Kata 1. Beginner Series #4 Cockroach:', cockroachSpeed(1.08));

// Kata: Area of a Square
// https://www.codewars.com/kata/5748838ce2fab90b86001b1a
// Complete the function that calculates the area of the red square,
// when the length of the circular arc A is given as the input.
// Return the result rounded to two decimals.
// http://i.imgur.com/nJrae8n.png
// Note: use the π value provided in your language
// (Math:: PI, M_PI, math.pi, etc)
function areaOfSquare(len) {
  const area = ((len * 2) / Math.PI) ** 2;
  return Number(area.toFixed(2));
}
console.log('Kata 2. Area of a Square:', areaOfSquare(2));

// Kata: Beginner Series #2 Clock
// www.codewars.com/kata/55f9bca8ecaa9eac7100004a
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time
// since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}
console.log('Kata 3. Beginner Series #2 Clock:', past(0, 1, 1));

// Kata Fundamentals: Return
// https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

console.log(
  'Kata 4. Fundamentals: Return ->',
  add(3, 4),
  divide(3, 4),
  multiply(3, 4),
  mod(3, 4),
  exponent(3, 4),
  subt(3, 4),
);

// Kata: Pillars
// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
// There are pillars near the road.
// The distance between the pillars is the same and the
// width of the pillars is the same.
// Your function accepts three arguments:
//   1. number of pillars (≥ 1);
//   2. distance between pillars (10 - 30 meters);
//   3. width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and
// the last pillar in centimeters(without the width of the first
// and last pillar).
function pillars(numPill, dist, width) {
  const centimetersDist = dist * 100;
  if (numPill === 1) {
    return 0;
  } else if (numPill === 2) {
    return centimetersDist;
  } else {
    return (numPill - 1) * centimetersDist + (numPill - 2) * width;
  }
}
console.log('Kata 5. Pillars:', pillars(11, 15, 30));
