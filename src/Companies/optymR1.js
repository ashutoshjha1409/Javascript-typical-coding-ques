console.log(5 < 6 < 7); // true
console.log(7 > 6 > 5); // false

var a = 10;
function b() {
  if (true) {
    let a = 10;
    console.log(a); // 10
  }
  console.log(c, a); // undefined, 10
  var c = 20;
  var a = 50;
  d = 30;
}
b();
console.log(d); // 30

let a = { name: "navnit", mob: "12345", address: { city: "bangalore" } };
let b = { ...a };
a.address.city = "hyderabad";
a.name = "sandip";
console.log(a, b);
// A => {name:"sandip", mob: "12345", address:{city:"hyderabad"}};
// B => {name:"sandip", mob: "12345",address:{city:"bangalore"}};

var i = 0;
const arr = ["a", "b", "c"];
for (i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(function (index) {
      console.log(arr[index]);
    }, 0);
  })(i);
  setTimeout(function () {
    console.log(arr[i]);
  }, 0);
}

console.log(i); // c, c, c

//a,b,c

CODING - reduce();
Array.prototype.myReduce = function (accum, initialValue) {
  let result = initialValue;
  let args = arguments;
  let self = this;
  for (let i = 0; i < args.length; i++) {
    result += self.call(args[i]);
  }
  return result;
};

let arr = [1, 2, 3];
let res = arr.myReduce((item) => {}, 0);
console.log(res);
