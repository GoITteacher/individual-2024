# Перебираючі методи масиву

# CARS

1. Знайти авто зеленого кольору
1. Знайти усі спорткари
1. Порахувати кількість авто 2022 року
1. Знайти всі машини з ціною вище 30000.
1. Знайти всі машини червоного кольору.
1. Порахувати кількість машин 2022 року.
1. Відсортувати машини за роком випуску (від найстарішого до найновішого).
1. Знайти найдорожчу машину.
1. Знайти всі машини заданої марки (наприклад, Toyota).
1. Порахувати загальну кількість машин усіх типів.
1. Відсортувати машини за ціною (від найдешевшої до найдорожчої).
1. Знайти всі машини певного типу (наприклад, SUV).
1. Знайти всі машини певного кольору та року випуску.
1. Порахувати середню ціну всіх машин.
1. Знайти всі машини, у яких кількість на складі більша за 0.
1. Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.
1. Порахувати сумарну кількість всіх машин заданої марки.
1. Відсортувати машини за кількістю на складі (від найбільшої до найменшої).
1. Знайти всі машини, які не є спортивними та доступні для продажу.
1. Порахувати загальну вартість всіх машин складі.
1. Знайти всі машини певного типу та кольору.
1. Відсортувати машини за брендом та моделлю в алфавітному порядку.
1. Перевірити, чи є хоч одна машина зеленого кольору.
1. Створити новий масив, що містить лише назви моделей усіх машин.
1. Створити масив, що містить розмітку кожної машини.
1. Знайти індекс першої машини з роком випуску 2022 року.
1. Сортувати за ціною

---

1. Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від
   нових до старих.
1. Перевірити, чи всі машини на складі доступні для продажу та створити новий
   масив, що містить лише моделі доступних машин.
1. Знайти першу машину, яка не є спортивною та має кількість на
   на складі більше 0, потім повернути її колір.
1. Порахувати загальну вартість всіх машин з кількістю на складі більше 2 і ціною
   менше 40 000.
1. Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком
   випуску від старих до нових і повернути масив тільки зі своїми моделями.
1. Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням
   ціни і повернути масив, що містить лише бренди цих машин.
1. Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після
   2020, відсортувати їх за зростанням ціни та повернути масив, що містить
   лише моделі цих машин.
1. Перевірити, чи всі машини заданої марки доступні для продажу та повернути
   масив, що містить лише кольори доступних машин.
1. Знайти індекс першої машини з ціною менше 20000 та повернути масив, що містить
   тільки бренди та моделі машин після знайденої.
1. Порахувати сумарну кількість машин заданого кольору та повернути новий масив,
   містить об'єкти з квітами та відповідними кількостями машин.
1. Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком
   випуску від нових до старих і повернути масив, що містить тільки моделі цих
   машин.
1. Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і
   ціною вище 70 000.
1. Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх
   по спаданню кількості та повернути масив, що містить тільки бренди та моделі
   цих машин.

# USERS

1. Знайти користувачів віком від 25 до 40 років.
1. Знайти всіх користувачів із активним статусом.
1. Порахувати кількість користувачів молодше 30 років.
1. Відсортувати користувачів віком від старшого до молодшого.
1. Знайти користувачів з електронною поштою на домені gmail.com.
1. Знайти всіх жінок серед користувачів.
1. Порахувати кількість неактивних користувачів.
1. Відсортувати користувачів на прізвище в алфавітному порядку.
1. Знайти користувача з найбільшим віком.
1. Перевірити, чи є хоча б один користувач із прізвищем "Johnson".
1. Створити новий масив, який містить лише імена користувачів.
1. Створити масив з інформацією про користувачів у форматі JSON.
1. Знайти індекс першого користувача під назвою "Jane".
1. Знайти всіх користувачів чоловічої статі віком від 30 до 50 років.
1. Порахувати загальну кількість користувачів.
1. Знайти всіх користувачів з активним статусом та віком старше 25 років.
1. Знайти користувачів із прізвищем, що починається на букву "S".
1. Відсортувати користувачів за віком (від молодшого до старшого).
1. Знайти всіх користувачів електронної пошти на домені yahoo.com.
1. Знайти користувача з найменшим віком.
1. Перевірити, чи є хоча б один користувач з ім'ям John.
1. Створити новий масив, що містить лише прізвища користувачів.
1. Створити масив з інформацією про користувачів як рядкових описів.
1. Знайти індекс користувача з активним статусом і віком більшим або рівним
   40 років.

---

```js
const cars = [
  {
    brand: "Toyota",
    model: "Camry",
    year: 2019,
    color: "Silver",
    price: 25000,
    amount: 3,
    isSportCar: false,
    type: "Sedan",
  },
  {
    brand: "Honda",
    model: "Accord",
    year: 2020,
    color: "White",
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: "Sedan",
  },
  {
    brand: "Ford",
    model: "Mustang",
    year: 2021,
    color: "Red",
    price: 50000,
    amount: 2,
    isSportCar: true,
    type: "Coupe",
  },
  {
    brand: "Chevrolet",
    model: "Camaro",
    year: 2018,
    color: "Black",
    price: 45000,
    amount: 1,
    isSportCar: true,
    type: "Coupe",
  },
  {
    brand: "BMW",
    model: "M5",
    year: 2022,
    color: "Blue",
    price: 70000,
    amount: 2,
    isSportCar: true,
    type: "Sedan",
  },
  {
    brand: "Mercedes-Benz",
    model: "E-Class",
    year: 2020,
    color: "Silver",
    price: 60000,
    amount: 3,
    isSportCar: false,
    type: "Sedan",
  },
  {
    brand: "Audi",
    model: "A4",
    year: 2021,
    color: "Gray",
    price: 45000,
    amount: 4,
    isSportCar: false,
    type: "Sedan",
  },
  {
    brand: "Lamborghini",
    model: "Huracan",
    year: 2023,
    color: "Yellow",
    price: 300000,
    amount: 1,
    isSportCar: true,
    type: "Coupe",
  },
  {
    brand: "Ferrari",
    model: "488 GTB",
    year: 2022,
    color: "Red",
    price: 350000,
    amount: 1,
    isSportCar: true,
    type: "Coupe",
  },
  {
    brand: "Porsche",
    model: "911",
    year: 2021,
    color: "White",
    price: 120000,
    amount: 2,
    isSportCar: true,
    type: "Coupe",
  },
  {
    brand: "Toyota",
    model: "Golf",
    year: 2020,
    color: "Black",
    price: 20000,
    amount: 6,
    isSportCar: false,
    type: "Hatchback",
  },
  {
    brand: "Subaru",
    model: "Forester",
    year: 2021,
    color: "Green",
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: "SUV",
  },
  {
    brand: "Jeep",
    model: "Wrangler",
    year: 2022,
    color: "Orange",
    price: 35000,
    amount: 2,
    isSportCar: false,
    type: "SUV",
  },
  {
    brand: "Mazda",
    model: "CX-5",
    year: 2020,
    color: "Red",
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: "SUV",
  },
  {
    brand: "Kia",
    model: "Soul",
    year: 2021,
    color: "Yellow",
    price: 20000,
    amount: 4,
    isSportCar: false,
    type: "Hatchback",
  },
  {
    brand: "Toyota",
    model: "Tucson",
    year: 2022,
    color: "White",
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: "SUV",
  },
  {
    brand: "Nissan",
    model: "Sentra",
    year: 2019,
    color: "Silver",
    price: 22000,
    amount: 3,
    isSportCar: false,
    type: "Sedan",
  },
  {
    brand: "Volvo",
    model: "XC60",
    year: 2020,
    color: "Blue",
    price: 40000,
    amount: 2,
    isSportCar: false,
    type: "SUV",
  },
  {
    brand: "Lexus",
    model: "RX",
    year: 2021,
    color: "Black",
    price: 50000,
    amount: 2,
    isSportCar: false,
    type: "SUV",
  },
  {
    brand: "Land Rover",
    model: "Range Rover Evoque",
    year: 2022,
    color: "Gray",
    price: 60000,
    amount: 1,
    isSportCar: false,
    type: "SUV",
  },
];

const users = [
  {
    firstName: "Alice",
    lastName: "Johnson",
    age: 28,
    email: "alice@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    age: 42,
    email: "bob@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Eva",
    lastName: "Williams",
    age: 35,
    email: "eva@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "David",
    lastName: "Brown",
    age: 22,
    email: "david@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Sophia",
    lastName: "Davis",
    age: 29,
    email: "sophia@example.com",
    isActive: false,
    gender: "Female",
  },
  {
    firstName: "Michael",
    lastName: "Miller",
    age: 50,
    email: "michael@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Olivia",
    lastName: "Wilson",
    age: 19,
    email: "olivia@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Daniel",
    lastName: "Thompson",
    age: 31,
    email: "daniel@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Ava",
    lastName: "Harris",
    age: 27,
    email: "ava@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "James",
    lastName: "Jackson",
    age: 38,
    email: "james@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Emma",
    lastName: "Taylor",
    age: 23,
    email: "emma@example.com",
    isActive: false,
    gender: "Female",
  },
  {
    firstName: "William",
    lastName: "Anderson",
    age: 45,
    email: "william@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Mia",
    lastName: "Martin",
    age: 29,
    email: "mia@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Joseph",
    lastName: "Clark",
    age: 33,
    email: "joseph@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Charlotte",
    lastName: "Rodriguez",
    age: 26,
    email: "charlotte@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "John",
    lastName: "Lopez",
    age: 31,
    email: "john@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Amelia",
    lastName: "Lee",
    age: 20,
    email: "amelia@example.com",
    isActive: false,
    gender: "Female",
  },
  {
    firstName: "Benjamin",
    lastName: "Gonzalez",
    age: 40,
    email: "benjamin@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Chloe",
    lastName: "Hernandez",
    age: 24,
    email: "chloe@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Daniel",
    lastName: "Young",
    age: 37,
    email: "daniel@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Olivia",
    lastName: "Miller",
    age: 38,
    email: "olivia@example.com",
    isActive: false,
    gender: "Female",
  },
  {
    firstName: "James",
    lastName: "Jones",
    age: 29,
    email: "james@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Sophia",
    lastName: "Davis",
    age: 31,
    email: "sophia@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "William",
    lastName: "Wilson",
    age: 52,
    email: "william@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Ava",
    lastName: "Taylor",
    age: 19,
    email: "ava@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Michael",
    lastName: "Clark",
    age: 40,
    email: "michael@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Emma",
    lastName: "Lee",
    age: 27,
    email: "emma@example.com",
    isActive: false,
    gender: "Female",
  },
  {
    firstName: "Daniel",
    lastName: "Martinez",
    age: 35,
    email: "daniel@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Isabella",
    lastName: "Hernandez",
    age: 42,
    email: "isabella@example.com",
    isActive: false,
    gender: "Female",
  },
  {
    firstName: "Liam",
    lastName: "Garcia",
    age: 26,
    email: "liam@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Mia",
    lastName: "Rodriguez",
    age: 30,
    email: "mia@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Noah",
    lastName: "Lopez",
    age: 24,
    email: "noah@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Charlotte",
    lastName: "Perez",
    age: 29,
    email: "charlotte@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Ethan",
    lastName: "Turner",
    age: 37,
    email: "ethan@example.com",
    isActive: true,
    gender: "Male",
  },
  {
    firstName: "Amelia",
    lastName: "White",
    age: 23,
    email: "amelia@example.com",
    isActive: true,
    gender: "Female",
  },
  {
    firstName: "Alexander",
    lastName: "Jackson",
    age: 41,
    email: "alexander@example.com",
    isActive: false,
    gender: "Male",
  },
  {
    firstName: "Sofia",
    lastName: "Brown",
    age: 33,
    email: "sofia@example.com",
    isActive: true,
    gender: "Female",
  },
];
```
