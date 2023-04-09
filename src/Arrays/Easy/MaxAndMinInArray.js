
const arr1 = [4, 2, 0, 8, 20, 9];
const arr2 = [-8, -3, -10, -32, -1];
/*
    2*(n-1) = 2n - 2
    Time complexity = O(n), Space complexity = O(1)
*/

const maxMinBF = (array) => {
    let max = array[0];
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        } 
        if(array[i] < min) {
            min = array[i];
        }
    }
    return [max, min];
}
const result = maxMinBF(arr1);
const result2 = maxMinBF(arr2);
console.log(result);
console.log(result2);