// ## Для життя

// ## Example 1 - Майстерня коштовностей

// Напишіть метод `calcTotalPrice(stoneName)`, який приймає назву каменю та
// розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
// кількістю із властивості `stones`.

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const stone = this.stones.find(stone => stone.name === stoneName);
    if (!stone) {
      return 0;
    }
    return stone.price * stone.quantity;
  },
};

console.log('Example 1 - Майстерня коштовностей');
console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// ## Example 2 - Телефонна книга

// Виконайте рефакторинг методів об'єкта `phonebook`, щоб код запрацював.

const phonebook = {
  contacts: [],
  add(contact) {
    contact.id = this.generateId();
    contact.date = this.getDate();
    this.contacts.push(contact);
    return contact;
  },
  generateId() {
    return '_' + Math.random().toString(36).slice(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

console.log('Example 2 - Телефонна книга');

console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  }),
);
console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  }),
);

// ## Example 3 - Калькулятор

// Створіть об'єкт calculator з трьома методами:

// - `read(a, b)`- приймає два значення та зберігає їх як властивості об'єкта.
// - `add()` - повертає суму збережених значень.
// - `mult()` - перемножує збережені значення та повертає результат.

const calculator = {
  a: 0,
  b: 0,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  add() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};

console.log('Example 3 - Калькулятор');

calculator.read(2, 3);
console.log(calculator.add()); // 5
console.log(calculator.mult()); // 6

// # Codewars

// 1. [Kata](https://www.codewars.com/kata/5983cba828b2f1fd55000114)
// 2. [Kata](https://www.codewars.com/kata/5848565e273af816fb000449)
// 3. [Kata](https://www.codewars.com/kata/581e014b55f2c52bb00000f8)
// 4. [Kata](https://www.codewars.com/kata/59df2f8f08c6cec835000012)
// 5. [Kata](https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9)
// 6. [Kata](https://www.codewars.com/kata/5783ef69202c0ee4cb000265)
// 7. [Kata](https://www.codewars.com/kata/60cc93db4ab0ae0026761232)
// 8. [Kata](https://www.codewars.com/kata/513e08acc600c94f01000001)
// 9. [Kata](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec)
// 10. [Kata](https://www.codewars.com/kata/54b724efac3d5402db00065e)
// 11. [Kata](https://www.codewars.com/kata/5277c8a221e209d3f6000b56)
// 12. [Kata](https://www.codewars.com/kata/51e0007c1f9378fa810002a9)
// 13. [Kata](https://www.codewars.com/kata/556deca17c58da83c00002db)
// 14. [Kata](https://www.codewars.com/kata/54e6533c92449cc251001667)
// 15. [Kata](https://www.codewars.com/kata/5727bb0fe81185ae62000ae3)
// 16. [Kata](https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08)
// 17. [Kata](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)

// ## Для Співбесіди

// ```js
// function func() {
//   console.log(this);
// }

// let user = {
//   firstName: 'Вася',
//   showInfo: func,
//   age: 20,
// };

// user.showInfo();

// // =========================================

// // =========================================

// const obj2 = {
//   name: 'awdawd',
// };

// let obj1 = {
//   name: 'obj1',
//   func() {
//     return () => {
//       console.log(this);
//     };
//   },
// };

// const foo = obj1.func;
// const newFunc = foo.call(obj1);
// newFunc();

// // =========================================

// function foo() {
//   const foo1 = () => {
//     const foo2 = () => {
//       const foo3 = () => {
//         console.log(this);
//       };
//       foo3();
//     };
//     foo2();
//   };
//   foo1();
// }

// foo();

// // =========================================

// const obj1 = {
//   name: 'obj1',
// };

// let obj2 = {
//   name: 'obj2',
//   func() {
//     function foo() {
//       console.log(this);
//     }
//     return foo;
//   },
// };

// const result = obj2.func;
// const newFunc2 = result.bind(obj1);
// const newFunc3 = newFunc2.bind(obj2);
// const res = newFunc3();
// res();

// // =========================================

// const foo = () => {
//   console.log(this);
// };

// const obj = {
//   test: foo.bind(null),
// };

// obj.test();
// // =========================================

// let elem = {
//   value: '123',
// };

// function func(a, b) {
//   function arrow(a, b) {
//     console.log(this);
//   }
//   arrow();
// }

// func.call(elem);

// // =========================================

// const user = {
//   name: 'Vasya',
//   showName() {
//     console.log(this.name.toUpperCase().trim().replace(' ', '-'));
//   },
// };

// const user1 = {
//   name: 'Petro',
// };

// user.showName.call(user1);
// ```
