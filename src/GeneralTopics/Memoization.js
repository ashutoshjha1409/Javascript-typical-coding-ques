// Memoization: Memoization is the process of caching the output of function calls so that subsequent calls are faster.
// Calling the function again with the same input will return the cached output without needing to do the calculation again.

const add = (a, b) => a + b;

const memoize = (fn) => {
  let cache = {};
  return function (...args) {
    let cachedKey = JSON.stringify(args);
    if (cachedKey in cache) {
      console.log(`Cached key: ${cachedKey}`);
      return cache[cachedKey];
    }
    let result = fn.apply(this, args);
    cache[cachedKey] = result;
    console.log(`New Cached key created: ${cachedKey}`);
    return result;
  };
};

const memoizeAdd = memoize(add);
// console.log(memoizeAdd(10, 20));
// console.log(memoizeAdd(20, 30));
// console.log(memoizeAdd(30, 10));
// console.log(memoizeAdd(10, 20));
// console.log(memoizeAdd(30, 10));

const factorial = memoize((x) => {
  if (x == 0 || x == 1) return 1;
  return x * factorial(x - 1);
});
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
