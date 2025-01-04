// ---

// Клас Calculator: Реалізуйте клас Calculator, який матиме методи для
// Основні математичні операції: add, subtract, multiply, і divide. Кожен
// метод прийматиме два числа і повертатиме результат відповідної операції.

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

console.log('Task 1, add:', Calculator.add(3, 4));
console.log('Task 1, subtract:', Calculator.subtract(3, 4));
console.log('Task 1, multiply', Calculator.multiply(3, 4));
console.log('Task 1, divide', Calculator.divide(3, 4));

// ---

// Клас ContactBook: Створіть клас Contact для подання контакту з полями name,
// email та phone. Потім реалізуйте клас ContactBook, який зберігатиме список
// контактів та надавати методи для додавання, видалення та пошуку контактів.

class Contact {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
    this.phone = params.phone;
  }
}

class ContactBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  deleteContact(contact) {
    // this.contacts = this.contacts.filter((item) => item !== contact);
    const index = this.contacts.indexOf(contact);
    if (index === -1) {
      return;
    }
    this.contacts.splice(index, 1);
  }

  findContact(params) {
    if (!params.name && !params.email && !params.phone) {
      return;
    }
    return this.contacts.find(item => {
      const isName = params.name ? item.name === params.name : true;
      const isEmail = params.email ? item.email === params.email : true;
      const isPhone = params.phone ? item.phone === params.phone : true;
      return isName && isEmail && isPhone;
    });
  }
}

book = new ContactBook();
book.addContact(
  new Contact({ name: 'Vasya', email: 'aaa@bbb.com', phone: '123' }),
);
book.addContact(
  new Contact({ name: 'Petya', email: 'aaa@bbb.com', phone: '123' }),
);
book.addContact(
  new Contact({ name: 'Vasya', email: 'aaa@bbb.com', phone: '123' }),
);
book.addContact(
  new Contact({ name: 'Petya', email: 'aaa@bbb.com', phone: '123' }),
);

console.log(
  'Task 2, findContact:',
  book.findContact({ name: 'Vasya', email: 'aaa@bbb.com', phone: '123' }),
);

// ---

// Клас Rectangle: Напишіть клас Rectangle, який представлятиме прямокутник з
// методами для обчислення його площі та периметра. Конструктор клас повинен
// приймати довжини двох сторін.
class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return this.a * this.b;
  }

  getPerimeter() {
    return (this.a + this.b) * 2;
  }
}

const rectangle = new Rectangle(3, 4);
console.log('Task 3, getArea:', rectangle.getArea());
console.log('Task 3, getPerimeter:', rectangle.getPerimeter());

// ---

// Клас ToDoList: Створіть клас Task для представлення задач з полями title,
// description та completed. Потім реалізуйте клас ToDoList, який зберігатиме
// список задач та методи для додавання нових завдань, позначки задачі як виконаної
// та виведення списку завдань.

class Task { 
  constructor(params) { 
    this.title = params.title;
    this.description = params.description;
    this.completed = params.completed;
  }
}

class ToDoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  
}

// ---

// Клас BankAccount: Реалізуйте клас BankAccount, який представлятиме банківський
// рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте
// обробку можливих помилок (наприклад, недостатньо коштів).

// ---

// Клас LibraryCatalog: Створіть клас Book для представлення книги з полями title,
// author та ISBN. Потім реалізуйте клас LibraryCatalog, який буде зберігати список
// книг у бібліотеці та надавати методи для додавання нових книг, пошуку книг за
// автором та ISBN, а також виведення списку всіх книг.

// ---

// Клас TemperatureConverter: Напишіть клас TemperatureConverter, який буде мати
// методи для конвертації температур між градусами Цельсія та Фаренгейта.

// ---

// Клас ShoppingCart: Реалізуйте клас Product для представлення товару з полями
// name, price та quantity. Потім створіть клас ShoppingCart, який зберігатиме
// список товарів та надавати методи для додавання товарів, підрахунку загальної
// вартості та виведення списку товарів.

// ---

// Клас SocialNetworkUser: Створіть клас SocialNetworkUser, який представляє
// користувача соціальної мережі з полями username, friends (список друзів) та
// методами для додавання та видалення друзів, а також виведення списку друзів.

// ---

// Клас MusicPlayer: Реалізуйте клас Song для представлення пісні з полями title,
// артист і тривалість. Потім створіть клас MusicPlayer, який зберігатиме список
// пісень та надавати методи для додавання нових пісень, відтворення, паузи та
// перемикання між піснями.

// ---

// Реалізуйте клас MyString, який буде мати наступні методи: метод reverse(), який
// параметром приймає рядок, а повертає її в перевернутому вигляді, метод
// ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його
// першу літеру заголовком і метод ucWords, який приймає рядок і робить заголовною
// першу літеру кожного слова цього рядка.

// ---

// Реалізуйте клас Validator, який перевірятиме рядки. Наприклад, у нього буде
// метод isEmail параметром приймає рядок і перевіряє, чи є він коректним емейлом
// чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, клас буде мати
// такі методи: метод isDomain для перевірки домену, метод isDate для перевірки
// дати і метод isPhone для перевірки телефону:

// ---

// **Завдання Банківський рахунок**

// Ви розробляєте систему управління банківськими рахунками. Вам потрібно створити
// клас `BankAccount` для подання банківського рахунку з різними властивостями та
// функціональністю.

// 1. Створіть клас `BankAccount` з приватною статичною властивістю `bankName`, яке
//    зберігатиме ім'я банку за умовчанням.

// 2. Додайте приватні властивості `accountNumber`, `balance` та `ownerName`, які
//    зберігатимуть номер рахунку, баланс та ім'я власника.

// 3. Створіть геттери та сеттери для властивостей `balance` та `ownerName`. Геттер
//    для балансу має форматувати його як грошову суму.

// 4. Додайте статичний метод `setBankName(bankName)`, який дозволить змінити ім'я
//    банку за промовчанням всім рахунків.

// 5. Реалізуйте метод `deposit(amount)`, який збільшуватиме баланс рахунку на
//    зазначену суму.

// 6. Реалізуйте метод `withdraw(amount)`, який зменшуватиме баланс рахунку на
//    зазначену суму, але якщо на рахунку достатньо коштів.

// Приклад:

// ```javascript
// // Створюємо банківський рахунок
// const account = new BankAccount('12345', 1000, 'John Doe');

// console.log(account.getAccountInfo());

// account.deposit(500);
// console.log(account.getAccountInfo());

// account.withdraw(200);
// console.log(account.getAccountInfo());

// account.balance = 1500;
// console.log(account.getAccountInfo());

// account.ownerName = 'Jane Smith';
// console.log(account.getAccountInfo());

// BankAccount.setBankName('NewBank');
// console.log(account.getAccountInfo());
// ```

// У цій задачі використовуються статичні властивості, приватні властивості, гетери
// та сеттери, щоб створити клас `BankAccount`, який представляє банківський
// рахунок з функціональністю для внесення депозитів, зняття коштів, зміни імені
// власника та виведення інформації про рахунок.

// ---

// **Завдання для класу ToDoList: Управління завданнями**

// Реалізуйте клас `Task` для подання завдання з полями:

// - `title` (заголовок задачі)
// - `description` (опис завдання)
// - `due_date` (термін виконання завдання)
// - `priority` (пріоритет завдання, наприклад, від 1 до 5)

// Потім створіть клас `ToDoList`, який представлятиме список завдань і буде мати
// такі методи:

// 1. `add_task(task: Task)`: Додає передане завдання до списку завдань.
// 2. `remove_task(task_title: str)`: Видаляє завдання за її заголовком.
// 3. `get_task(task_title: str) -> Task`: Повертає завдання з її заголовку.
// 4. `get_all_tasks() -> List[Task]`: Повертає перелік всіх завдань.
// 5. `get_tasks_by_priority(priority: int) -> List[Task]`: Повертає перелік
//    завдань певного пріоритету.
// 6. `get_tasks_by_due_date(date: datetime) -> List[Task]`: Повертає список
//    завдань, у яких термін виконання не пізніше вказаної дати.

// Приклад використання:

// ```js
// const task1 = Task(
//   'Підготувати презентацію',
//   'Підготувати матеріали та слайди для презентації',
//   '2023-09-01',
//   3,
// );
// const task2 = Task(
//   'Зробити покупки',
//   'Купити продукти для приготування обіду',
//   '2023-08-25',
//   2,
// );
// const task3 = Task(
//   'Записати відеоурок',
//   'Записати урок з програмування',
//   '2023-08-28',
//   4,
// );
// ```

// Завдання полягає в тому, щоб реалізувати клас `ToDoList` з методами, які
// дозволяють керувати списком завдань: додавати, видаляти, отримувати інформацію
// про задачах та фільтрувати задачі за різними критеріями.

// ---

// **Завдання для класу FriendList: Управління списком друзів**

// Ви розробляєте програму для керування списком друзів користувачів. Вам потрібно
// створити клас `Friend` для подання інформації про друга з полями:

// - `name` (ім'я друга)
// - `age` (вік друга)
// - `email` (електронна пошта друга)
// - `isBestFriend` (прапор, що вказує, чи є один найкращим другом)

// Потім створіть клас `FriendList`, який представлятиме список друзів користувача.
// Клас повинен мати такі методи:

// 1. `addFriend(friend: Friend)`: Додає переданого друга до списку друзів.
// 2. `removeFriend(email: string)`: Видаляє друга електронною поштою.
// 3. `getFriendByEmail(email: string)`: Повертає інформацію про друга щодо нього
//    електронній пошті.
// 4. `getBestFriends()`: Повертає список усіх найкращих друзів.
// 5. `getFriendsByAge(age: number)`: Повертає список друзів певного віку.

// Приклад використання:

// ```js
// // Створюємо об'єкти Friend
// const friend1 = new Friend("John", 25, "john@example.com", true);
// const friend2 = new Friend("Jane", 30, "jane@example.com", false);
// const friend3 = new Friend("Michael", 28, "michael@example.com", true);

// // Створюємо об'єкт FriendList
// const myFriendList = новий FriendList();

// // Додаємо друзів до списку
// myFriendList.addFriend(friend1);
// myFriendList.addFriend(friend2);
// myFriendList.addFriend(friend3);

// // Видаляємо друга електронною поштою
// myFriendList.removeFriend("jane@example.com");

// // Отримуємо інформацію про друга електронною поштою
// const foundFriend = myFriendList.getFriendByEmail("john@example.com");

// // Отримуємо список найкращих друзів
// const bestFriends = myFriendList.getBestFriends();

// // Отримуємо список друзів певного віку
// const friendsWithAge28 = myFriendList.getFriendsByAge(28);
// ```

// Завдання полягає в реалізації класу `FriendList` з методами, які дозволяють
// керувати списком друзів, додавати та видаляти друзів, а також виконувати пошук
// та фільтрацію друзів за різними критеріями.

// ---

// **Завдання Створення ієрархії фігур**

// Ви розробляєте програму для роботи з геометричними фігурами. Вам потрібно
// створити ієрархію класів для представлення різних фігур: кола, прямокутника та
// трикутника. Усі фігури повинні мати спільний метод `calculateArea()`, який
// обчислюватиме і повертатиме площу фігури.

// 1. Створіть базовий клас `Shape`, який міститиме конструктор з координатами
//    центру фігури та метод `calculateArea()`. Метод `calculateArea()` у базовому
//    класі має повертати 0.

// 2. Створіть підкласи для кожної геометричної фігури: `Circle`, `Rectangle` та
//    `Triangle`. Кожен підклас повинен успадковувати від Shape.

// 3. Реалізуйте метод calculateArea() для кожного підкласу, щоб він коректно
//    обчислював площу відповідної фігури.

// 4. Створіть кілька об'єктів кожного типу фігур та виведіть їх площі.

// Приклад:

// ```js
// const circle = new Circle(0, 0, 5);
// const rectangle = new Rectangle(0, 0, 4, 6);
// const triangle = new Triangle(0, 0, 8, 5);

// console.log('Circle area:', circle.calculateArea()); // Output: Circle area: 78.53981633974483
// console.log('Rectangle area:', rectangle.calculateArea()); // Output: Rectangle area: 24
// console.log('Triangle area:', triangle.calculateArea()); // Output: Triangle area: 20
// ```

// Завдання полягає у створенні ієрархії класів з використанням успадкування,
// реалізації методу `calculateArea()` для кожного підкласу та демонстрації
// розрахунків площ різних постатей.

// ---

// **Завдання Онлайн магазин електроніки**

// Ви розробляєте веб-додаток для онлайн-магазину електроніки. Вам потрібно
// створити ієрархію класів для різних типів продуктів: смартфонів, ноутбуків та
// навушників. Кожен продукт має свої характеристики, такі як бренд, модель, ціна
// та характеристики (наприклад, роздільна здатність екрану для смартфона, тип
// процесора для ноутбука та тип підключення для навушників).

// 1. Створіть базовий клас `Product`, який міститиме конструктор з основними
//    характеристиками продукту, такими як бренд, модель та ціна.

// 2. Створіть підкласи для кожного типу продуктів: Smartphone, Laptop і
//    `Headphones`. Кожен підклас повинен успадковувати від `Product`.

// 3. Додайте додаткові характеристики для кожного типу продуктів, наприклад, для
//    смартфонів - роздільна здатність екрана, для ноутбуків - тип процесора, для
//    навушників – тип підключення.

// 4. Реалізуйте метод `productDescription()`, який повертатиме рядок з опис
//    продукту, включаючи всі його характеристики.

// 5. Створіть декілька об'єктів кожного типу продуктів та виведіть їх описи.

// Приклад:

// ```javascript
// const smartphone = новий Smartphone ("Apple", "iPhone 13", 999, "1920x1080");
// const laptop = new Laptop("Dell", "XPS 15", 1499, "Intel Core i7");
// const headphones = New Headphones("Sony", "WH-1000XM4", 349, "Bluetooth");

// console.log(smartphone.productDescription());
// console.log(laptop.productDescription());
// console.log(headphones.productDescription());
// ```

// Завдання полягає у створенні ієрархії класів з використанням успадкування,
// додаванні характеристик для кожного підкласу, реалізації методу
// `productDescription()` та демонстрації описів різних типів продуктів.

// ---
