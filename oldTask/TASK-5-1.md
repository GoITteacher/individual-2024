```js
let user = {
  firstName: "Вася",
  showInfo: func,
  age: 20,
};

function func() {
  console.log(this);
}

user.showInfo();

// =========================================

const obj2 = {
  name: "awdawd",
};

let obj1 = {
  name: "obj1",
  func() {
    return () => {
      console.log(this);
    };
  },
};

const foo = obj1.func;
const newFunc = foo.call(obj1);
newFunc();

// =========================================

function foo() {
  const foo1 = () => {
    const foo2 = () => {
      const foo3 = () => {
        console.log(this);
      };
      foo3();
    };
    foo2();
  };
  foo1();
}

foo();

// =========================================

const obj1 = {
  name: "obj1",
};

let obj2 = {
  name: "obj2",
  func() {
    function foo() {
      console.log(this);
    }
    return foo;
  },
};

const result = obj2.func;
const newFunc2 = result.bind(obj1);
const newFunc3 = newFunc2.bind(obj2);
const res = newFunc3();
res();

// =========================================

const foo = () => {
  console.log(this);
};

const obj = {
  test: foo.bind(null),
};

obj.test();
// =========================================

let elem = {
  value: "123",
};

function func(a, b) {
  function arrow(a, b) {
    console.log(this);
  }
  arrow();
}

func.call(elem);

// =========================================

const user = {
  name: "Vasya",
  showName() {
    console.log(this.name.toUpperCase().trim().replace(" ", "-"));
  },
};

const user1 = {
  name: "Petro",
};

user.showName.call(user1);
```
