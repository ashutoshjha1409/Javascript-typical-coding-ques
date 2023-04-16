/*
    Problem Statement -
    Write a function to chop an array into chunks of a given length and
    return each chunk as an array without modifying the input array.

    Example:
    Input:
    [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ]
    3
    Output:
    [[ 1 , 2 , 3 ], [ 4 , 5 , 6 ], [ 7 , 8 , 9 ], [ 10 ]]
    slice(start, end)
*/


const chopArray = (arr, size) => {
    let result = [];
    let index = 0;
    while (index < arr.length) {
        //console.log("i: ", index, arr.splice(index, size))
        result.push(arr.slice(index, index + size));
        index = index + size;
    }
    return result;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(chopArray(arr1, 3))

const chopString = (str, size) => {
    let result = [];
    let index = 0;
    while (index < str.length) {
        console.log("i: ", index, typeof str)
        result.push(str.slice(index, index + size)); //str.subStr(index, size)
        index = index + size;
    }
    return result;
}

console.log(chopString("javascript", 3))