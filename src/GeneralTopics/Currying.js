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
/*
  Implement the curry function which accepts a function as the only argument and returns a function that 
  accepts single arguments and can be repeatedly called until at least the minimum number of arguments have 
  been provided (determined by how many arguments the original function accepts). 
  The initial function argument is then invoked with the provided arguments.

  e.g1
  function addTwo(a, b) {
    return a + b;
  }

  const curriedAddTwo = curry(addTwo);
  curriedAddTwo(3)(4); // 7

  const alreadyAddedThree = curriedAddTwo(3);
  alreadyAddedThree(4); // 7

  eg.2
  function multiplyThree(a, b, c) {
    return a * b * c;
  }

  const curriedMultiplyThree = curry(multiplyThree);
  curriedMultiplyThree(4)(5)(6); // 120

  const containsFour = curriedMultiplyThree(4);
  const containsFourMulFive = containsFour(5);
  containsFourMulFive(6); // 120
*/

export default function curry(func) {
  return function curried(...args){
      if(args.length >= func.length) {
          return func.apply(this, args);
      }
      return function(...args2){
          return curried.apply(this, [...args, ...args2])
      };
  };  
}

function add(a,b,c) {
  return a+b+c;
}  
  
function multi(a,b,c,d) {
  return a*b*c*d;
}

const processFun = (func) => {
  return function curried(...args){
    return function(...args2){
      if (args2) {
        if(args.length >= func.length) {  
          return func.apply(this, args);
        }
      }
      return curried.apply(this, [...args, ...args2])       
    };
};  
}
console.log(processFun(add)(1)(2)(3)());
console.log(processFun(add)(1)(2,3)())
console.log(processFun(multi)(1)(2)(4)(5)());