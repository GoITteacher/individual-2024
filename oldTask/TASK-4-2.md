# CARS

1. Найти автомобили дороже 5000
1. Найти авто зеленого цвета
1. Найти все спорткары
1. Посчитать количество авто 2022 года
1. Отсортировать машини по цене
1. Найти все машины с ценой выше 50000.
1. Найти все машины красного цвета.
1. Найти все машины, которые являются спортивными.
1. Посчитать количество машин 2022 года.
1. Отсортировать машины по году выпуска (от самого старого до самого нового).
1. Найти самую дорогую машину.
1. Найти все машины заданной марки (например, Toyota).
1. Посчитать общее количество машин всех типов.
1. Отсортировать машины по цене (от самой дешевой до самой дорогой).
1. Найти все машины определенного типа (например, SUV).
1. Найти все машины определенного цвета и года выпуска.
1. Посчитать среднюю цену всех машин.
1. Найти все машины, у которых количество на складе больше 0.
1. Найти все машины с ценой меньше 30000 и годом выпуска после 2020.
1. Посчитать суммарное количество всех машин заданной марки.
1. Отсортировать машины по количеству на складе (от наибольшего к наименьшему).
1. Найти все машины, которые не являются спортивными и доступны для продажи.
1. Посчитать общую стоимость всех машин на складе.
1. Найти все машины определенного типа и цвета.
1. Отсортировать машины по бренду и модели в алфавитном порядке.
1. Проверить, есть ли хотя бы одна машина зеленого цвета.
1. Создать новый массив, содержащий только названия моделей всех машин.
1. Создать массив, содержащий разметку для каждой машини.
1. Найти индекс первой машины с годом выпуска 2022.

---

1. Найти все машины с ценой выше 50000 и отсортировать их по году выпуска от
   новых к старым.
1. Проверить, все ли машины на складе доступны для продажи и создать новый
   массив, содержащий только модели доступных машин.
1. Найти первую машину, которая не является спортивной и имеет количество на
   складе больше 0, затем вернуть её цвет.
1. Посчитать общую стоимость всех машин с количеством на складе больше 2 и ценой
   меньше 40000.
1. Найти все машины определенного типа (например, SUV), отсортировать их по году
   выпуска от старых к новым и вернуть массив только с их моделями.
1. Найти все спортивные машины с ценой выше 60000, отсортировать их по убыванию
   цены и вернуть массив, содержащий только бренды этих машин.
1. Найти все машины заданного цвета (например, "Blue") и года выпуска после
   2020, отсортировать их по возрастанию цены и вернуть массив, содержащий
   только модели этих машин.
1. Проверить, все ли машины заданной марки доступны для продажи и вернуть
   массив, содержащий только цвета доступных машин.
1. Найти индекс первой машины с ценой меньше 20000 и вернуть массив, содержащий
   только бренды и модели машин после найденной.
1. Посчитать суммарное количество машин заданного цвета и вернуть новый массив,
   содержащий объекты с цветами и соответствующими количествами машин.
1. Найти все машины с ценой между 40000 и 60000, отсортировать их по году
   выпуска от новых к старым и вернуть массив, содержащий только модели этих
   машин.
1. Проверить, есть ли хотя бы одна машина с количеством на складе больше 5 и
   ценой выше 70000.
1. Найти все машины, у которых количество на складе больше 0, отсортировать их
   по убыванию количества и вернуть массив, содержащий только бренды и модели
   этих машин.

# USERS

1. Найти пользователей в возрасте от 25 до 40 лет.
1. Найти всех пользователей с активным статусом.
1. Посчитать количество пользователей младше 30 лет.
1. Отсортировать пользователей по возрасту от старшего к младшему.
1. Найти пользователей с электронной почтой на домене gmail.com.
1. Найти всех женщин среди пользователей.
1. Посчитать количество неактивных пользователей.
1. Отсортировать пользователей по фамилии в алфавитном порядке.
1. Найти пользователя с самым большим возрастом.
1. Проверить, есть ли хотя бы один пользователь с фамилией "Johnson".
1. Создать новый массив, содержащий только имена пользователей.
1. Создать массив с информацией о пользователях в формате JSON.
1. Найти индекс первого пользователя с именем "Jane".
1. Найти всех пользователей мужского пола в возрасте от 30 до 50 лет.
1. Посчитать общее количество пользователей.
1. Найти всех пользователей с активным статусом и возрастом старше 25 лет.
1. Найти пользователей с фамилией, начинающейся на букву "S".
1. Отсортировать пользователей по возрасту (от младшего к старшему).
1. Найти всех пользователей с электронной почтой на домене yahoo.com.
1. Найти пользователя с самым маленьким возрастом.
1. Проверить, есть ли хотя бы один пользователь с именем "John".
1. Создать новый массив, содержащий только фамилии пользователей.
1. Создать массив с информацией о пользователях в виде строковых описаний.
1. Найти индекс пользователя с активным статусом и возрастом больше или равным
   40 лет.

---

```js
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
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
