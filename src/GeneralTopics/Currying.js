// Currying

// Case 1: add(1)(2)(3)

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(add(5)(5)(5));

// Case 2: add(1)(2)(3)…(n)()

function addCase2(a) {
  return function (b) {
    if (b) {
      return addCase2(a + b);
    }
    return a;
  };
}

console.log(addCase2(1)(2)(3)(4)(5)());

// Case 3: sum(1,2)(3,4)(5, 6)()

function sum(a, b) {
  return function (c, d) {
    if (c && d) {
      return sum(a + b, c + d);
    }
    return a + b;
  };
}
console.log(sum(1, 2)(3, 4)(5, 6)());

// Case 4: add(1,2..n)(5,6…n)…(n)()

function add4(...args) {
  let a = args.reduce((a, b) => a + b, 0);
  return function (...args) {
    let b = args.reduce((a, b) => a + b, 0);
    if (b) {
      return add4(a + b);
    }
    return a;
  };
}
