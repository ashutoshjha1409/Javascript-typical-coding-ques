/*
    Given an integer array, find a contiguous subarray within it that has the largest sum.
    Input:  {-2, 1, -3, 4, -1, 2, 1, -5, 4}
 
    Output: Subarray with the largest sum is {4, -1, 2, 1} with sum 6.

*/

const kadane = (arr) => {
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let max = maxCurrent + arr[i];
        if(max < arr[i]) {
            maxCurrent = arr[i];
        } else
            maxCurrent = max;
        if(maxCurrent > maxGlobal)
            maxGlobal = maxCurrent; 
    }
    return maxGlobal;
}

// const array1 = [-2, 3, 2, -1];
// const array1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6
const array1 = [-2, -3, 4, -1, -2, 1, 5, -3]; //7
let res = kadane(array1);
console.log(res);