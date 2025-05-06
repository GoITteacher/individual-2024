# [TASKS](https://habr.com/ru/post/681882/)

## Task 1

```js
setTimeout(function timeout() {
  console.log("1");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("2");
  resolve();
});

p.then(function () {
  console.log("3");
});

console.log("4");
```

---

## Task 2

```js
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
```

---

## Task 3

```js
console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);
```

---

## Task 4

```js
const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });
setTimeout(() => console.log("1"), 1000);
myPromise(1000).then((res) => console.log("2"));
setTimeout(() => console.log("3"), 100);
myPromise(2000).then((res) => console.log("4"));
setTimeout(() => console.log("5"), 2000);
myPromise(1000).then((res) => console.log("6"));
setTimeout(() => console.log("7"), 1000);
myPromise(5000).then((res) => console.log("8"));
```

---

<br /><br /><br /><br />

# [TASKS 2](https://russianblogs.com/article/33321448227/)

## Task 1

```js
setTimeout(() => {
  console.log(1);
}, 0);
new Promise((resolve, reject) => {
  console.log(2);
  resolve(null);
}).then((v) => {
  console.log(3);
});
console.log(4);
```

---

## Task 2

```js
setTimeout(function () {
  console.log("s1");
}, 0);
setTimeout(function () {
  console.log("s2");
}, 1000);
new Promise(function (resolve) {
  console.log("p1");
  resolve();
  console.log("p2");
}).then(function () {
  console.log("p3");
});
console.log("w1");
async function test1() {
  console.log("a1");
  await test2();
  console.log("a2");
}
async function test2() {
  console.log("a3");
}
test1();
console.log("w2");
```

---

## Task 3

```js
Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });
```

---

## Task 4

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Start");
    resolve("success");
  }, 5000);
});

const start = Date.now();
console.log("w1");

promise.then((res) => {
  console.log(res, Date.now() - start);
});

promise.then((res) => {
  console.log(res, Date.now() - start);
});
```

---

## Task 5

```js
console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
});

new Promise((resolve, reject) => {
  console.log(4);
  resolve(5);
}).then((data) => {
  console.log(data);

  Promise.resolve()
    .then(() => {
      console.log(6);
    })
    .then(() => {
      console.log(7);

      setTimeout(() => {
        console.log(8);
      }, 0);
    });
});

setTimeout(() => {
  console.log(9);
});

console.log(10);
```

---

<br /><br /><br /><br />

# [TASKS 3](https://www.google.com/amp/s/habr.com/ru/amp/post/582914/)

## Task 1

```js
Promise.resolve("1")
  .then((data) => {
    console.log(data);
  })

  .then((data) => {
    console.log(data);
    return "2";
  })

  .then((data) => {
    console.log(data);
  });
```

---

## Task 2

```js
Promise.reject(1)
  .then((data) => {
    console.log(data);
  })
  .then(null, (data) => console.log(data))
  .then(() => console.log("ok"));
```

---

## Task 3

```js
Promise.reject()
    .then(
        data => console.log('ok'),
        data => console.log('error')
```

---

## Task 4

```js
Promise.resolve("1")
  .then(null)
  .then((data) => console.log(data));
```

---

## Task 5

```js
Promise.reject("Api Error")
  .then((data) => console.log("ok"))
  .catch((error) => {
    console.log(error);
    return "1";
  })
  .then((data) => {
    console.log(data);
  });
```

---

## Task 6

```js
Promise.reject()
  .catch(() => {
    console.log("error1");
    return Promise.reject();
  })

  .catch(() => {
    console.log("error2");
  });
```

---

## Task 7

```js
Promise.resolve()
  .then((data) => {
    throw new Error("Api Error");
    return 1;
  })
  .then((data) => console.log("ok"))

  .catch((error) => {
    console.log(error.message);
    return "2";
  })

  .then((data) => {
    console.log(data);
  });
```

---

## Task 8

```js
Promise.resolve().then(() => {
  throw new Error("Api Error");
});

setTimeout(() => {
  console.log("setTimeout");
}, 1000);
```

---

## Task 9

```js
Promise.reject("Api Error")
  .catch(null)
  .then((data) => console.log("ok"))
  .catch((error) => console.log(error))
  .then((data) => console.log("ok"));
```

---

## Task 10

```js
Promise.resolve()
  .then(() => {
    return "1";
  })

  .finally((data) => {
    console.log(data);
    return "2";
  })

  .then((data) => console.log(data));
```

---

## Task 11

```js
Promise.reject().finally((data) => {
  console.log("finally");
});
```

---

## Task 12

```js
Promise.resolve()
  .then(() => console.log(1))
  .then(() => console.log(2));

Promise.resolve()
  .then(() => console.log(11))
  .then(() => console.log(12));
```

---

## Task 13

```js
Promise.resolve()
  .then(() => console.log(1))
  .then(() => {
    console.log(2);
    throw new Error();
  })
  .catch(() => console.log(3))
  .then(() => console.log(4));

Promise.resolve()
  .then(() => console.log(11))
  .then(() => {
    console.log(12);
    throw new Error();
  })
  .catch(() => console.log(13))
  .then(() => console.log(14));
```

---

## Task 14

```js
const foo = () => {
  Promise.resolve().then(() => foo());
};

foo();
```

---
