/*
    Problem Statement:
    Given an array nums and a value val, remove all instances of that value in-place and return the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

    Time complexity: O(n)
    Space complexity: O(1)
*/

const removeElementInPlaceBF = (arr, val) => {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== val) {
            arr[index++] = arr[i];
        }
    }
    console.log(arr);
    return index;
}

const arr1 = [0,1,2,2,3,0,4,2];
let res = removeElementInPlaceBF(arr1, 2);
console.log(res);