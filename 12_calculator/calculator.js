
const add = function (a, b) {
  let sum = a + b;
  return sum;
}

add(0, 0);
add(2, 2);
add(2, 6);

const subtract = function (a, b) {
  let diff = a - b;;
  return diff;
}

subtract(10, 4);
subtract(-10, -4);
subtract(-8, 7);

const sum = function (inputArray) {
  let sum = inputArray.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

sum([]);
sum([7]);
sum([7, 11]);
sum([1, 3, 5, 7, 9]);

const multiply = function (inputArray) {
  let product = inputArray.reduce((acc, curr) => acc * curr);
  return product;
}

multiply([2, 4]);
multiply([2, 4, 6, 8, 10, 12, 14]);

const power = function (a, b) {
  let result = Math.pow(a, b);
  return result;
}

power(4, 3);
power(3, 10);

const factorial = function (n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
