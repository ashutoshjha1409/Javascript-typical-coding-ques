// Polyfill: Map

let array1 = [1, 2, 3, 4];

let myArr = array1.map((num, i, arr) => num * num);

Array.prototype.myArray = function (cb) {
  let temp = [];
  // this -> array referencing to, e.g array1.myArray then array1 is 'this' here
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};
let myArr1 = array1.myArray((num, i, arr) => num * num);
console.log(myArr1);

// Polyfill: Filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
let filArr = array1.myFilter((num, i, arr) => num > 2);
console.log(filArr);

// polyfill: reduce

Array.prototype.myReducer = function (cb, initialValue) {
  let accumalator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumalator = accumalator ? cb(this[i], accumalator, i, this) : this[i];
  }
  return accumalator;
};
let sum = array1.myReducer((num, initial, i, arr) => num + initial, 0);
console.log(sum);
