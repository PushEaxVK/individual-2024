// 1. Напиши цикл, який виведе на консоль числа від 1 до 10.
(() => {
  console.log('-- Task 1 --');
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
})();

// 2. Напиши цикл, який виведе на консоль парні числа від 1 до 20.
(() => {
  console.log('-- Task 2 --');
  let i = 1;
  while (i <= 20) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i += 1;
  }
})();

// 3. Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.
(() => {
  console.log('-- Task 3 --');
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
})();

// 4. Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до
//  10).
(() => {
  console.log('-- Task 4 --');
  for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
  }
})();

// 5. Напиши цикл, який обчислить факторіал числа, введеного користувачем
//  (наприклад, факторіал числа 5: `!5 = 1 * 2 * 3 * 4 * 5`).
(() => {
  console.log('-- Task 5 --');
  let fact = 1;
  for (let i = 2; i <= 5; i++) {
    fact *= i;
  }
  console.log(fact);
})();

// 6. Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"
(() => {
  console.log('-- Task 6 --');
  const text = 'Hello worl';
  for (let i = 1; i < text.length; i += 2) {
    console.log(text[i]);
  }
})();

// 7. Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому
//  порядку.
(() => {
  const text = 'Hello world';
  console.log('-- Task 7 --');
  for (let i = text.length - 1; i >= 0; i--) {
    console.log(text[i]);
  }
})();

// 8. Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне
//  пробіл.
(() => {
  console.log('-- Task 8 --');
  for (symbol of 'Hello world') {
    if (symbol === ' ') {
      break;
    }
    console.log(symbol);
  }
})();

// 9. Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".
(() => {
  console.log('-- Task 9 --');
  const text = 'JavaScript';
  for (let i = 1; i < text.length; i += 2) {
    console.log(text[i]);
  }
})();

// 10. Напиши функцію, яка приймає рядок та повертає перевернутий рядок
const reverseText = text => {
  return text.split('').reverse().join('');
};
console.log('Task 10:', reverseText('Hello'));

// 11. Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у
// верхньому регістрі
const transformString = text => {
  const symbols = text.split('');
  for (let i = 1; i < symbols.length; i += 2) {
    symbols[i] = symbols[i].toUpperCase();
  }
  return symbols.join('');
};
console.log('Task 11:', transformString('hello world'));

// 12. Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до
// рядочка str1 стільки разів скільки вказали у параметрі count.
const getString = (str1, str2, count) => {
  const stringArray = [str1];
  for (let i = 1; i <= count; i++) {
    stringArray.push(str2);
  }
  return stringArray.join('');
};
console.log('Task 12:', getString('Hello', ' world', 3));
