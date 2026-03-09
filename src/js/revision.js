// # Revision Tasks (complex problems)

// ---

/* 
{
  Electronics: {count: 44, totalValue: 1200}
}
*/

// Task 1: Inventory report
const inventoryItems = [
  { name: 'Laptop', category: 'Electronics', price: 1200, stock: 4 },
  { name: 'Mouse', category: 'Electronics', price: 25, stock: 40 },
  { name: 'Desk Chair', category: 'Furniture', price: 150, stock: 6 },
  { name: 'Notebook', category: 'Stationery', price: 5, stock: 120 },
  { name: 'Monitor', category: 'Electronics', price: 300, stock: 3 },
  { name: 'Pen', category: 'Stationery', price: 2, stock: 200 },
];

const minPerCategory = {
  Electronics: 5,
  Furniture: 3,
  Stationery: 100,
};

// У вас є масив товарів. Кожен товар має структуру:
// { name, category, price, stock }.
// Потрібно реалізувати кілька допоміжних функцій для аналізу інвентарю:
// - calcInventoryValue(items) — повертає загальну вартість усіх товарів
//   (price * stock для кожного елемента).

function calcInventoryValue(items) {
  let sum = 0;
  for (let item of items) {
    sum += item.price * item.stock;
  }
  return sum;
}

// - findLowStock(items, threshold) — повертає масив імен товарів, у яких
//   кількість на складі (stock) менша або дорівнює threshold.

function findLowStock(items, threshold) {
  const arrNew = items.stock
    .filter(item => item.stock <= threshold)
    .map(item => item.name);
  return arrNew;
}

// - groupByCategory(items) — повертає об'єкт, де ключами є назви категорій,
//   а значеннями — об'єкти вигляду { count, totalValue }, де:
//     count — кількість товарів у категорії,
//     totalValue — сумарна вартість товарів цієї категорії.

function groupByCategory(items) {
  const obj = {};

  for (let item of items) {
    if (obj[item.category]) {
      obj[item.category].count += item.stock;
      obj[item.category].totalValue += item.stock * item.price;
    } else {
      obj[item.category] = {
        count: item.stock,
        totalValue: item.stock * item.price,
      };
    }
  }

  return obj;
}

// - prepareRestockList(items, minPerCategory) — повертає масив товарів,
//   які потрібно дозамовити. Товар потрібно додати до результату, якщо
//   його stock < minPerCategory[category].

function prepareRestockList(items, minPerCategory) {
  const arr1 = {};
  for (let item of items) {
    minPerCategory.item.category;
    if (item.stock < minPerCategory['Electronics']) {
      arr1.push(item);
    }
  }

  return arr1;
}

// ---

// Task 2: Student progress analyzer
const students = [
  { name: 'Anna', scores: [88, 92, 79], submittedAssignments: 10 },
  { name: 'Mark', scores: [70, 68, 75], submittedAssignments: 8 },
  { name: 'Julia', scores: [95, 90, 93], submittedAssignments: 9 },
  { name: 'Tom', scores: [88, 92, 79], submittedAssignments: 7 },
  { name: 'Kate', scores: [60, 65, 58], submittedAssignments: 5 },
];
// Є масив студентів. Кожен об'єкт має структуру:
// { name, scores: [...], submittedAssignments: number }.
// Потрібно реалізувати функції для аналізу їхнього прогресу:
// - calcAverageScore(student) — повертає середній бал студента,
//   округлений до одного знака після коми.
function calcAverageScore(student) {
  let sum = 0;

  for (let item of student.scores) {
    sum += item;
  }

  const res = sum / student.scores.length;
  return res.toFixed(1);
}

// calcAverageScore(students[0]);

// - rankStudents(students) — повертає новий масив імен студентів,
//   відсортований за середнім балом (від більшого до меншого).
//   Якщо середній бал однаковий, вище в рейтингу має бути студент,
//   у якого МЕНША кількість submittedAssignments.
function rankStudents(students) {
  return students
    .map(el => {
      return { ...el, avg: calcAverageScore(el) };
    })
    .toSorted((a, b) => {
      return a.submittedAssignments - b.submittedAssignments;
    })
    .toSorted((a, b) => {
      const average1 = calcAverageScore(a);
      const average2 = calcAverageScore(b);
      return average2 - average1;
    })
    .map(el => el.name);
}

// - studentsNeedingHelp(students, minScore, minAssignments) — повертає
//   масив об'єктів { name, reason } для студентів, які:
//   або мають середній бал нижчий за minScore,
//   або здали менше завдань, ніж minAssignments.

function studentsNeedingHelp(students, minScore, minAssignments) {
  return students
    .filter(student => {
      const average = calcAverageScore(student);
      const condition1 = average <= minScore;
      const condition2 = student.submittedAssignments <= minAssignments;
      return condition1 || condition2;
    })
    .map(student => {
      const average = calcAverageScore(student);
      const condition1 = average <= minScore;
      if (condition1) {
        return { name: student.name, reason: 'minScore' };
      } else {
        return { name: student.name, reason: 'minAssignments' };
      }
    });
}

// ---

// Task 3: Schedule conflict detector
const events = [
  { id: 1, title: 'Team Meeting', day: 'Mon', start: '09:00', end: '10:00' },
  { id: 2, title: 'Client Call', day: 'Mon', start: '09:30', end: '10:30' },
  { id: 3, title: 'Project Review', day: 'Tue', start: '11:00', end: '12:00' },
  { id: 4, title: 'Workshop', day: 'Wed', start: '14:00', end: '16:00' },
  { id: 5, title: '1:1 Meeting', day: 'Mon', start: '11:00', end: '11:30' },
];
// Є масив подій календаря. Кожна подія має структуру:
// { id, title, day, start, end }.
// day — рядок 'Mon'...'Sun', час задається у форматі 'HH:MM'.
// Реалізуйте функції для роботи з розкладом:
// - sortSchedule(events) — повертає новий масив подій,
//   відсортований спочатку за днем тижня (Mon → Sun),
//   а потім за часом початку (start).
// - detectConflicts(events) — повертає масив пар [eventIdA, eventIdB]
//   для подій, які відбуваються в один і той самий день
//   і мають перетин у часі.
// - summarizeDay(events, day) — повертає рядок
//   "{day}: {count} подій, {duration} хв.",
//   де count — кількість подій у цей день,
//   duration — сумарна тривалість усіх подій у хвилинах.

// ---

// Task 4: Text formatter pipeline
const textSample = `JavaScript   is a powerful language!!! JavaScript is widely used
for web development... Developers often write JavaScript code every day!!!`;

const stopWords = ['the', 'is', 'a', 'for', 'and', 'to', 'of', 'in'];
// Реалізуйте набір функцій для обробки тексту:
// - normalizeText(text) — очищає текст: прибирає зайві пробіли,
//   переводить усі символи у нижній регістр та замінює
//   послідовності однакових розділових знаків одним знаком.
// - extractKeywords(text, stopWords) — повертає масив ключових слів:
//   слова довші за 3 символи, без stopWords, відсортовані
//   за спаданням частоти появи у тексті.
// - summarizeText(text, maxWords) — повертає коротку версію тексту:
//   перші maxWords слів + "..." наприкінці.
//   Якщо слово довше ніж 10 символів, його потрібно
//   розбити на частини по 10 символів.
// hello

// ---

// Task 5: Playlist helper
const tracks = [
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    durationSeconds: 200,
    genre: 'Pop',
  },
  {
    title: 'Lose Yourself',
    artist: 'Eminem',
    durationSeconds: 326,
    genre: 'Hip-Hop',
  },
  {
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    durationSeconds: 233,
    genre: 'Pop',
  },
  {
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    durationSeconds: 354,
    genre: 'Rock',
  },
  {
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    durationSeconds: 194,
    genre: 'Pop',
  },
];

const preferredGenres = ['Rock', 'Pop'];
// Є масив музичних треків:
// { title, artist, durationSeconds, genre }.
// Реалізуйте допоміжні функції для роботи з плейлистом:
// - totalDuration(tracks) — повертає сумарну тривалість усіх треків
//   у форматі "HH:MM:SS".
// - buildQueue(tracks, preferredGenres) — повертає новий масив,
//   де спочатку йдуть треки з жанрів preferredGenres
//   (у тому порядку, як вони були у вихідному масиві),
//   а потім усі інші треки.
// - findTopTracks(tracks, minDuration, maxDuration, limit) —
//   повертає треки, тривалість яких знаходиться
//   між minDuration та maxDuration,
//   відсортовані за спаданням durationSeconds,
//   але не більше ніж limit елементів.

// ---

// Task 6: Weather aggregator
const weatherData = [
  { date: '2024-07-01', tempC: 30, feelsLikeC: 33, humidity: 70 },
  { date: '2024-07-02', tempC: 32, feelsLikeC: 35, humidity: 65 },
  { date: '2024-07-03', tempC: 34, feelsLikeC: 38, humidity: 60 },
  { date: '2024-07-04', tempC: 36, feelsLikeC: 40, humidity: 55 },
  { date: '2024-07-05', tempC: 37, feelsLikeC: 41, humidity: 50 },
];
// Є масив погодних вимірювань:
// { date: 'YYYY-MM-DD', tempC, feelsLikeC, humidity }.
// Потрібно реалізувати функції для аналізу цих даних:
// - dailyAverages(data) — повертає масив об'єктів
//   { date, avgTemp, avgFeelsLike } з середніми значеннями
//   температури та "відчувається як" за кожен день.
// - heatWavePeriods(data, threshold) — повертає масив інтервалів
//   [{ start, end }], де протягом 10 днів поспіль
//   середня температура (avgTemp) перевищує threshold.
// - humdityAlerts(data) — повертає рядок
//   "{count} днів з вологістю > 80%."
//   де count — кількість таких вимірювань.

// ---

// Task 7: Budget tracker
const transactions = [
  {
    id: 1,
    description: 'Salary',
    amount: 3000,
    category: 'Job',
    type: 'income',
  },
  {
    id: 2,
    description: 'Groceries',
    amount: 120,
    category: 'Food',
    type: 'expense',
  },
  {
    id: 3,
    description: 'Rent',
    amount: 900,
    category: 'Housing',
    type: 'expense',
  },
  {
    id: 4,
    description: 'Freelance',
    amount: 600,
    category: 'Job',
    type: 'income',
  },
  {
    id: 5,
    description: 'Restaurant',
    amount: 60,
    category: 'Food',
    type: 'expense',
  },
];

const limits = {
  Food: 150,
  Housing: 1000,
};
// Є масив фінансових транзакцій:
// { id, description, amount, category, type }.
// type може бути 'expense' або 'income'.
// Реалізуйте функції для формування фінансового звіту:
// - buildReport(transactions) — повертає об'єкт
//   { totalIncome, totalExpenses, balance }.
// - categoryBreakdown(transactions) — повертає об'єкт
//   виду { [category]: sum } тільки для витрат.
// - detectOverspending(transactions, limits) — якщо
//   сума витрат по категорії перевищує limits[category],
//   додає у результат об'єкт { category, spent, limit }.

// ---

// Task 8: Matrix utilities
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Реалізуйте допоміжні функції для роботи з матрицями
// (матриця — це масив масивів чисел):
// - rotateMatrix90(matrix) — повертає нову матрицю,
//   повернуту на 90° за годинниковою стрілкою.
// - sumDiagonal(matrix) — повертає об'єкт
//   { main, secondary } — суми головної
//   та побічної діагоналей.
// - flattenAndFilter(matrix, predicate) — спочатку
//   перетворює матрицю у плоский масив,
//   після чого повертає тільки ті числа,
//   що задовольняють predicate.

// ---

// Task 9: Recursive folder size
const fileTree = {
  name: 'root',
  type: 'folder',
  children: [
    { name: 'index.js', type: 'file', size: 1200 },
    {
      name: 'src',
      type: 'folder',
      children: [
        { name: 'app.js', type: 'file', size: 3400 },
        { name: 'utils.js', type: 'file', size: 2100 },
      ],
    },
    {
      name: 'assets',
      type: 'folder',
      children: [{ name: 'logo.png', type: 'file', size: 5400 }],
    },
  ],
};
// Є об'єкт, який представляє файлову систему:
// { name, type: 'file' | 'folder', size?, children? }.
// Потрібно рекурсивно обійти цю структуру:
// - calcFolderSize(node) — повертає сумарний розмір
//   усіх файлів усередині вузла.
//   Файл має поле size, папка — масив children.
// - findLargestFile(node) — знаходить найбільший файл
//   та повертає об'єкт { path, size },
//   де path — повний шлях до файлу (через '/').

// ---

// Task 10: Event log processor
const log = [
  {
    timestamp: '2024-01-01T09:15:00',
    type: 'LOGIN',
    payload: { user: 'Anna' },
  },
  {
    timestamp: '2024-01-01T09:45:00',
    type: 'VIEW',
    payload: { page: 'dashboard' },
  },
  {
    timestamp: '2024-01-01T10:10:00',
    type: 'LOGOUT',
    payload: { user: 'Anna' },
  },
  { timestamp: '2024-01-01T10:30:00', type: 'LOGIN', payload: { user: 'Tom' } },
  {
    timestamp: '2024-01-01T11:00:00',
    type: 'VIEW',
    payload: { page: 'settings' },
  },
];
// Є масив логів подій:
// { timestamp, type, payload }.
// Реалізуйте функції для аналізу логів:
// - groupByHour(log) — повертає об'єкт, де ключ — година
//   (наприклад '09'), а значення — масив записів,
//   що відбулися у цю годину.
// - countByType(log) — повертає об'єкт
//   { [type]: count }.
// - tail(log, n) — повертає останні n записів
//   у тому самому порядку, як у вихідному масиві.
