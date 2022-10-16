// Closures

// What will log to console the following code snippet?
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
// 3 three times, 3 3 3

// Options 1: change to let
for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

// Options 2: Use IIFE
for (var i = 0; i < 3; i++) {
  (function (inc) {
    setTimeout(function log() {
      console.log(inc); // What is logged?
    }, 1000);
  })(i);
}

// Option 3: Pass 3rd arg in setTimeout
for (var i = 0; i < 3; i++) {
  setTimeout(
    function log(j) {
      console.log(j); // What is logged?
    },
    1000,
    i
  );
}

// Question: Restore encapsulation
function createStack() {
  let items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items;
