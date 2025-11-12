//Hoisting
function abc() {
  console.log(a, b, c);
  var a = 10;
  let b = 12;
  const c = 19;
}

abc();

//Explicit and Implicit Binding
const obj = {
  name: "Ashish",
  displayName: function () {
    // If arrow function then console will be empty as this points to window object
    console.log(this.name);
  },
};

const obj2 = {
  name: "Ashish Chandwani",
};

obj.displayName(); // Ashish
obj.displayName.call(obj2); // Ashish Chandwani

//Memoization
function myMemoize(fn, context) {
  let res = {};
  return function (...args) {
    const argsString = JSON.stringify(args);
    if (!res[argsString]) {
      res[argsString] = fn.call(context || this, ...args);
    }
    return res[argsString];
  };
}

function largeProduct(num1, num2) {
  for (let i = 0; i < 1000000; i++) {}
  return num1 * num2;
}

const memoizedLargeProduct = myMemoize(largeProduct);

console.time("First call");
console.log(memoizedLargeProduct(4859, 4859));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedLargeProduct(4859, 4859));
console.timeEnd("Second call");

// Infinite Currying for add function
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(4)(5)(6)());

// Implement code

const calc = {
  total: 0,
  add: function (arg) {
    this.total = this.total + arg;
    return this;
  },
  multiply: function (arg) {
    this.total = this.total * arg;
    return this;
  },
  subtract: function (arg) {
    this.total = this.total - arg;
    return this;
  },
};

const res = calc.add(10).multiply(2).subtract(5).add(10);
console.log(res.total);
