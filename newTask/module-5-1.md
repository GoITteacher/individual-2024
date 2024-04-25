# Callback

---

1. **Сума чисел:** Напишіть функцію `sumArray(numbers, callback)`, яка приймає
   масив чисел `numbers` та колбек `callback`. Функція повинна обчислити суму
   чисел у масиві та передати результат у колбек.

2. **Подвоєння чисел:** Напишіть функцію `doubleArray(numbers, callback)`, яка
   приймає масив чисел `numbers` та колбек `callback`. Функція повинна подвоїти
   кожне число в масиві та передати новий масив у колбек.

3. **Фільтр слів:** Напишіть функцію `filterWords(words, condition, callback)`,
   яка приймає масив рядків `words`, функцію `condition` (перевірка рядка) та
   колбек `callback`. Функція повинна фільтрувати слова масиву за допомогою
   переданої умови та передати відфільтрований масив у колбек.

4. **Капіталізація рядків:** Напишіть функцію
   `capitalizeStrings(strings, callback)`, яка приймає масив рядків `strings` та
   колбек `callback`. Функція повинна перетворити всі рядки в масиві, роблячи
   першу літеру кожного рядка великої, і передати перетворений масив в колбек.

5. **Сортування чисел:** Напишіть функцію `sortNumbers(numbers, callback)`, яка
   приймає масив чисел `numbers` та колбек `callback`. Функція повинна
   відсортувати числа в масиві за зростанням та передати відсортований масив у
   колбек.

6. **Пошук максимуму:** Напишіть функцію `findMax(numbers, callback)`, яка
   приймає масив чисел `numbers` та колбек `callback`. Функція повинна знайти
   максимальне число в масиві та передати його в колбек.

7. **Перевірка на парність:** Напишіть функцію `checkEven(numbers, callback)`,
   яка приймає масив чисел `numbers` та колбек `callback`. Функція повинна
   перевірити, чи всі числа в масиві парні, і передати результат перевірки
   колбек.

8. **Об'єднання рядків:** Напишіть функцію
   `concatStrings(strings, separator, callback)`, яка приймає масив рядків
   `strings`, рядок `separator` та колбек `callback`. Функція повинна об'єднати
   рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що
   вийшов, в колбек.

9. **Перетворення в числа:** Напишіть функцію `parseNumbers(strings, callback)`,
   яка приймає масив рядків `strings` та колбек `callback`. Функція повинна
   перетворити кожен рядок з масиву на число і передати новий масив чисел в
   колбек.

10. **Підрахунок символів:** Напишіть функцію
    `countCharacters(strings, callback)`, яка приймає масив рядків `strings` та
    колбек `callback`. Функція повинна підрахувати загальну кількість символів у
    всіх рядках масиву та передати результат у колбек.

## Успіхів у вирішенні цих завдань! Кожна з них дозволить вам практикуватися у використанні колбек функцій для обробки даних та керування потоком виконання.

## Example 1 - Коллбек функции

Напишите следующие функции:

- `createProduct(obj, callback)` - принимает объект товара без id, а также
  колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в
  свойство `id` и вызывает колбек передавая ему созданный обьект.
- `logProduct(product)` - коллбек принимающий обьект продукта и логирующий его в
  консоль
- `logTotalPrice(product)` - коллбек принимающий обьект продукта и логирующий
  общую стоимость товара в консоль

```js
// Решение

createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);
```

## Example 2 - Коллбек функции

Добавьте объекту `account` методы `withdraw(amount, onSuccess, onError)` и
`deposit(amount, onSuccess, onError)`, где первый параметр это сумма операции, а
второй и третий - колбеки.

Метод `withdraw` вызывает onError если amount больше TRANSACTION_LIMIT или
this.balance, и onSuccess в противном случае.

Метод `deposit` вызывает onError если amount больше TRANSACTION_LIMIT или меньше
либо равен нулю, и onSuccess в противном случае.

```js
const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
```

## Example 3 - Коллбек функции

Напишите функцию `each(array, callback)`, которая первым параметром ожидает
массив, а вторым - функцию, которая применится к каждому элементу массива.
Функция each должна вернуть новый массив, элементами которого будут результаты
вызова коллбека.

```js
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
```

## Example 4 - Стрелочные функции

Выполните рефакторинг кода используя стрелочные функции.

```js
function createProduct(partialProduct, callback) {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
}

function logProduct(product) {
  console.log(product);
}

function logTotalPrice(product) {
  console.log(product.price * product.quantity);
}

createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);
```

## Example 5 - Стрелочные функции

Выполните рефакторинг кода используя стрелочные функции.

```js
const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
```

## Example 6 - Инлайн стрелочные функции

Выполните рефакторинг кода используя стрелочные функции.

```js
function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
```

## Example 7 - Метод forEach

Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

```js
function logItems(items) {
  console.log(items);
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
```

## Example 8 - Метод forEach

Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

```js
function printContactsInfo({ names, phones }) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});
```

## Example 9 - Метод forEach

Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

```js
function calсulateAverage(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
```

---

# Codewars

1. [Kata Series](https://www.codewars.com/kata/572ab0cfa3af384df7000ff8)
1. [Kata](https://www.codewars.com/kata/55a1528cca4a6d4c5a0000e3/train/javascript)
1. [Kata](https://www.codewars.com/kata/5983cba828b2f1fd55000114)
1. [Kata](https://www.codewars.com/kata/5848565e273af816fb000449)
1. [Kata](https://www.codewars.com/kata/581e014b55f2c52bb00000f8)
1. [Kata](https://www.codewars.com/kata/59df2f8f08c6cec835000012)
1. [Kata](https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9)
1. [Kata](https://www.codewars.com/kata/5783ef69202c0ee4cb000265)
1. [Kata](https://www.codewars.com/kata/60cc93db4ab0ae0026761232)
