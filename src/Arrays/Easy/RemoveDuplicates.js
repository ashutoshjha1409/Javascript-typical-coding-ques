
const removeDuplicateBF = (arr) => {
  let index = 1;
  let res = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i + 1] !== "undefined" && arr[i] != arr[i + 1]) {
      res[index++] = arr[i + 1];
    }
  }
  return res;
};

const array1 = [1, 1, 1, 1, 2, 2, 3, 3];
const res = removeDuplicateBF(array1);
console.log(`Array is: ${res} and length is: ${res.length}`);