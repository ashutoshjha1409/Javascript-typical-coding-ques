/*
    Given an array arr[] of N positive integers. The task is to write a program to count the number of prime elements in the given array.
    Examples: 
    

    Input: arr[] = [1, 3, 4, 5, 7]
    Output: 3
    There are three primes, 3, 5 and 7

    Input: arr[] = [1, 2, 3, 4, 5, 6, 7]
    Output: 4

*/

const checkIfPrime = (num) => {
    let isPrime = true;
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            isPrime = false;
        }
    }
    return isPrime;
}

const countPrimeBf = (arr) => {
    var arrOfInterest = [];
    for(let i = 0; i < arr.length; i++) {
        let isPrime = checkIfPrime(arr[i]);
        
        if(isPrime && arr[i] > 2) arrOfInterest.push(arr[i]);
    }
    return arrOfInterest.length;
}

const array1 = [1, 3, 4, 5, 7];
let res = countPrimeBf(array1);
console.log(res);