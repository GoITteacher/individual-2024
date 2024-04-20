# Numbers and порівняння

## Task 1

Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
змінної `value`. Використовуй методи `Math.floor()`, `Math.ceil()` та
`Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

```js
const value = 27.5;
```

---

## Task 2

Яким буде результат виразів?

```js
console.log(5 > 4);

console.log(10 >= "7");

console.log("2" > "12");

console.log("2" < "12");

console.log("4" == 4);

console.log("6" === 6);

console.log("false" === false);

console.log(1 == true);

console.log(1 === true);

console.log("0" == false);

console.log("0" === false);

console.log("Papaya" < "papaya");

console.log("Papaya" === "papaya");

console.log(undefined == null);

console.log(undefined === null);
```

---

## Task 3

Напиши скрипт який переведе значення `totalMinutes` (кількість хвилин)
рядок у форматі годин та хвилин `HH:MM`.

- 70 покаже 01:10
- 450 покаже 07:30
- 1441 покаже 24:01

```js
const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
```

---

## Task 4

Отрефактори код так, щоб у змінну `value` присвоювалося значення
змінної `incomingValue`, якщо воно не дорівнює `undefined` або `null`. У
в іншому випадку має надаватися значення `defaultValue`. Перевір роботу
скрипта для сліпучих значень змінної `incomingValue`: null, undefined, 0,
false. Використовуй оператор "?" (nullish coalescing operator).

```js
const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue || defaultValue;
console.log(value);
```

---

## CodeWars

1. [Kata](https://www.codewars.com/kata/5748838ce2fab90b86001b1a)
1. [Kata](https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6)
1. [Kata](https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript)
1. [Kata](https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a)
1. [Kata](https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript)
1. [Kata](https://www.codewars.com/kata/5708f682c69b48047b000e07)
1. [Kata](https://www.codewars.com/kata/5bb0c58f484fcd170700063d)
