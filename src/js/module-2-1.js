'use strict';

// Задача-1
function clubGuard(age, balance) {
  return age > 18 && balance > 100 ? 'Wellcome' : 'Goodbye';
}

console.log('Задача-1:', clubGuard(19, 1200)); // Wellcome

// Задача-2
function canWeBuy(amount, price) {
  if (amount * price <= 1000) {
    return 'Ми це купуємо';
  } else {
    return 'Це занадто дорого';
  }
}

console.log('Задача-2:', canWeBuy(10, 100));

// Задача-3
function temperatureStatus(temp) {
  if (temp < 0) {
    return 'Замерзає';
  } else if (temp < 25) {
    return 'Нормальна температура';
  } else {
    return 'Спекотно';
  }
}

console.log('Задача-3:', temperatureStatus(15));

// Задача-4
function isDivisible(number, divisor) {
  return number % divisor === 0 ? 'Ділиться' : 'Не ділиться';
}

console.log('Задача-4:', isDivisible(10, 2));

// Задача-5
function weatherDecision(isRaining, hasUmbrella) {
  if (isRaining) {
    if (hasUmbrella) {
      return 'Не змокнеш';
    } else {
      return 'Змокнеш';
    }
  } else {
    return 'Без дощу';
  }
}

console.log('Задача-5:', weatherDecision(true, true));

// Задача-6
function evaluateGrade(grade) {
  if (grade >= 90) {
    return 'Відмінно';
  } else if (grade >= 75) {
    return 'Добре';
  } else if (grade >= 50) {
    return 'Задовільно';
  } else {
    return 'Незадовільно';
  }
}

console.log('Задача-6:', evaluateGrade(85));

// Задача-7
function checkDayStatus(dayOfWeek, isHoliday) {
  if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday' || isHoliday) {
    return 'Вихідний';
  } else {
    return 'Робочий день';
  }
}

console.log('Задача-7:', checkDayStatus('Saturday', true));

// Задача-8
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 'Високосний рік';
  } else {
    return 'Звичайний рік';
  }
}

console.log('Задача-8:', checkLeapYear(2024));

// Задача-9
function checkInvitation(hasInvitation, isFriend) {
  return hasInvitation || isFriend ? 'Ви запрошені' : 'Вхід заборонено';
}

console.log('Задача-9:', checkInvitation(true, false));

// Задача-10
function determineAgeGroup(age) {
  if (age < 12) {
    return 'Дитина';
  } else if (age < 18) {
    return 'Підліток';
  } else if (age < 60) {
    return 'Дорослий';
  } else {
    return 'Пенсіонер';
  }
}

console.log('Задача-10:', determineAgeGroup(25));

// Задача-11
function checkUserAccess(isLoggedIn, hasAdminRights) {
  if (isLoggedIn && hasAdminRights) {
    return 'Адмін-сторінка';
  } else if (isLoggedIn) {
    return 'Користувач';
  } else {
    return 'Гість';
  }
}

console.log('Задача-11:', checkUserAccess(true, false));

// Задача-12
function checkSpeed(speed) {
  if (speed < 60) {
    return 'Безпечно';
  } else if (speed < 100) {
    return 'Увага';
  } else {
    return 'Небезпечно';
  }
}

console.log('Задача-12:', checkSpeed(75));

// Задача-13
function checkTimeAndDay(time, isWeekend) {
  if (time < 12 && !isWeekend) {
    return 'Ранок буднього дня';
  } else if (time > 12 && time < 18 && isWeekend) {
    return 'День вихідного дня';
  } else {
    return 'Вечір';
  }
}

console.log('Задача-13:', checkTimeAndDay(11, false));

// Задача-14
function checkFoodAllergy(hasGlutenAllergy, containsGluten) {
  return hasGlutenAllergy && containsGluten ? 'Не можна їсти' : 'Можна їсти';
}

console.log('Задача-14:', checkFoodAllergy(true, true));

// Задача-15
function canBuyAlcohol(age) {
  return age < 18 ? 'Не можна купувати алкоголь' : 'Можна купувати алкоголь';
}

console.log('Задача-15:', canBuyAlcohol(20));

// Задача-16
function planForWeather(isSunny) {
  if (isSunny) {
    return 'Вийдемо на прогулянку';
  } else {
    return 'Залишимося вдома';
  }
}

console.log('Задача-16:', planForWeather(true));

// Задача-17
function checkEvenOdd(number) {
  return number % 2 === 0 ? 'Парне' : 'Непарне';
}

console.log('Задача-17:', checkEvenOdd(7));

// Задача-18
function verifyPasswords(password, confirmPassword) {
  if (password === confirmPassword) {
    return 'Паролі збігаються';
  } else {
    return 'Паролі не збігаються';
  }
}

console.log('Задача-18:', verifyPasswords('12345', '12345'));

// Задача-19
function determineSeason(temperature) {
  if (temperature < 0) {
    return 'Зима';
  } else if (temperature <= 15) {
    return 'Весна';
  } else if (temperature <= 25) {
    return 'Літо';
  } else {
    return 'Осінь';
  }
}

console.log('Задача-19:', determineSeason(16));

// Задача-20
function compareNumbers(number1, number2) {
  if (number1 > number2) {
    return 'Перше більше';
  } else if (number1 < number2) {
    return 'Перше менше';
  } else {
    return 'Рівні';
  }
}

console.log('Задача-20:', compareNumbers(10, 20));
