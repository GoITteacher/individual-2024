# Модуль 3 Занятие 6. Деструктуризация и rest/spread

## Example 1 - Деструктуризация

Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
независимых аргументов.

```js
function calcBMI(weight, height) {
  const numericWeight = Number(weight.replace(",", "."));
  const numericHeight = Number(height.replace(",", "."));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// Было
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Ожидается
console.log(
  calcBMI({
    weight: "88,3",
    height: "1.75",
  })
);
console.log(
  calcBMI({
    weight: "68,3",
    height: "1.65",
  })
);
console.log(
  calcBMI({
    weight: "118,3",
    height: "1.95",
  })
);
```

## Example 2 - Деструктуризация

Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
независимых аргументов.

```js
function printContactsInfo(names, phones) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// Было
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Ожидается
printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});
```

## Example 3 - Глубокая деструктуризация

Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
независимых аргументов.

```js
function getBotReport(companyName, repairBots, defenceBots) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// Было
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Ожидается
console.log(
  getBotReport({
    companyName: "Cyberdyne Systems",
    bots: {
      repair: 150,
      defence: 50,
    },
  })
); // "Cyberdyne Systems has 200 bots in stock"
```

## Example 4 - Деструктуризация

Перепиши функцию так, чтобы она принимала объект параметров со свойствами
`companyName` и `stock` и выводила репорт о количестве товаров на складе любой
компании.

```js
// Решение

console.log(
  getStockReport({
    companyName: "Cyberdyne Systems",
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: "Belacci",
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"
```

## Example 5 - Операция spread

Дополни функцию `createContact(partialContact)` так, чтобы она возвращала новый
объект контакта с добавленными свойствами `id` и `createdAt`, а также `list` со
значением "default" если в `partialContact` нет такого свойства.

```js
console.log(
  createContact({
    name: "Mango",
    email: "mango@mail.com",
    list: "friends",
  })
);
console.log(
  createContact({
    name: "Poly",
    email: "poly@hotmail.com",
  })
);

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
```

## Example 6 - Операция rest

Напиши функцию `transformUsername(user)` так, чтобы она возвращала новый обьект
со свойством `fullName`, вместо `firstName` и `lastName`.

```js
console.log(
  transformId({
    id: 1,
    firstName: "Jacob",
    lastName: "Mercer",
    email: "j.mercer@mail.com",
    friendCount: 40,
  })
);

console.log(
  transformId({
    id: 2,
    firstName: "Adrian",
    lastName: "Cross",
    email: "a.cross@hotmail.com",
    friendCount: 20,
  })
);
```

---

# [Задачки №1](https://the-evening-code.com/posts/ten-javascript-exercises-with-objects)

- ```js
  // Напишите функцию, которая возвращает новый объект без указанных значений.
  ```

- ```js
  // Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
  ```

- ```js
  // Напишите функцию, которая поверхностно сравнивает два объекта.
  ```

- ```js
  // Напишите функцию, которая вызывает метод массива на заданный путь объекта.
  ```

- ```js
  // Напишите функцию, которая вызывает метод массива на заданный путь объекта.
  ```

- ```js
  // Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
  ```

---

```js
// Функция, сливающая массивы в двухмерный
// Функция, сливающая массивы в один
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
