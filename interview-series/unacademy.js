// Difference between map and forEach

/**
 * Map
 * 1 . It returns the element by modifying the element of array
 * 2 . we can chain other array function after map
 *
 * For Each
 * 1 . It does not returns anything
 * 2 .  we cant chain other array function after for each
 */

const arr = [2, 4, 6, 8];
const mapResult = arr.map((elem) => elem + 2).filter((el) => el % 2 === 0);
const forEachResult = arr.forEach((elem) => elem + 2);
console.log(mapResult, forEachResult);

// Null vs Undefined

/**
 * Null
 * 1 . Its an actual value
 * 2 . typeof null is an object
 *
 * Undefined
 * 1 . Its an value which is assigned by javascript when we declare a variable without an value
 * 2 . typeof undefined is undefined
 */

// Output
console.log(null === undefined); // false - checks the type
console.log(null == undefined); // true - does not check the type

// Event Delegation

/**
 * Suppose we have product list items , we cant add click event listener on each item as it will do memory leak
 * So , event listener is added on parent and from there we target the list item
 */

const itemsList = document
  .getElementById("items-list")
  .addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      window.location.href += "#" + event.target.id;
    }
  });

// Flatten Array

const flatArrInput = [
  [1, 2],
  [2, 3],
  [4, 5, [6, 7, [8, 9]]],
];

const flattenArray = (a, depth = 1) => {
  const flatArray = [];
  a.forEach((elem) => {
    if (depth > 0 && Array.isArray(elem)) {
      flatArray.push(...flattenArray(elem, depth - 1));
    } else {
      flatArray.push(elem);
    }
  });
  return flatArray;
};

console.log(flattenArray(flatArrInput, 2));

// Diff : var and let and const

/**
 * var is function scoped
 * let is blocked scoped
 *
 * we can redeclare var variable
 * we cannot redeclare let variable
 *
 * const should be assigned value
 */

// Output based question

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// O/P : 3 3 3
// use let for 0 , 1 , 2
// use IIFE for 0 , 1 , 2
a();

// Explain call , apply , bind

const person = {
  name: "John",
  printName: function (greeting) {
    return greeting + ", " + this.name;
  },
};

const person2 = {
  name: "Sam",
};

console.log(person.printName.call(person2, "Hello"));

console.log(person.printName.call(person2, ["Hello"]));

const bindPerson = person.printName.bind(person);
console.log(bindPerson("heyy"));

// Compose Function Pollyfill

const addFive = (a) => {
  return a + 5;
};

const subTwo = (b) => {
  return b - 2;
};

const multiplyTwo = (c) => {
  return c * 2;
};

const compose = (...functions) => {
  return function (arg) {};
};

// Promise All Polyfill

function showText(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 2000);
  });
}

Promise.all([
  Promise.resolve("A"),
  Promise.resolve("B"),
  Promise.reject("Error"),
  showText("hello"),
]).then((res) => console.log(res));

function myPromiseAll(promises) {
  const result = [];
  return new Promise((res, rej) => {
    promises.forEach((promise, index) => {
      promise
        .then((data) => {
          result.push(data);
          if (index === promises.length - 1) {
            res(result);
          }
        })
        .catch((err) => rej(err));
    });
  });
}

myPromiseAll([
  Promise.resolve("A"),
  Promise.resolve("B"),
  showText("hello"),
]).then((res) => console.log(res));
