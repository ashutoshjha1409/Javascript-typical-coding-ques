/*
    Flatten array
    Write a function to flatten a multi-dimensional array (depth can go till n-levels) and the result should not contain any null/undefined values.
*/

const flattenBF = (array) => {
  let newArr = [];
  let i = 0;
  while (i < array.length) {
    if (Array.isArray(array[i])) {
      newArr = [...newArr, ...flattenArray(array[i])]
      //newArr = newArr.concat(flattenBF(array[i]));
    }
    else
      if (array[i] != null)
        newArr.push(array[i]);
    i++;
  }
  return newArr;
}

let arr1 = [1, , [3, [4, 5, 6], 7], 8];
let arr2 = [1, 2, 3, 4, 5, [6, [7, 8, 9]]];
let arr3 = [1, 2, 3, 4, 5, [6, [7, 8, 9, [10, [11, [12, 13]]]]]]
//console.log(flattenBF(arr3))

function flattenArray(arr) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    const currentValue = arr[index];
    if (Array.isArray(currentValue)) {
      result = [...result, ...(flattenArray(currentValue))];
      // we can also use concat method to achieve the same result
      // result = result.concat(flattenArray(currentValue));
    } else {
      if (currentValue != null) {
        result.push(currentValue);
      }
    }
  }
  return result;
}

const flatten = (arr, limit) => {
  let result = [];
  let counter = limit;
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    //console.log("currentValue", currentValue)
    if (Array.isArray(currentValue) && counter > 0) {

      // result = [...result, ...flatten(currentValue, counter--)];     
      result = result.concat(flatten(currentValue, --counter)) // --counter is the trick here
    }
    else {
      if (currentValue !== null) {
        result.push(currentValue);
      }
    }
  }
  return result;
}

const testArray = [1, 2, , [4, undefined, [11, 10]], 6, [7, null, 0], null, 9];
const result = flattenArray(testArray);
console.log(result);