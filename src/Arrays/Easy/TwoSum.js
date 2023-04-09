/*
    Brute force
    Time Complexity: O(n²)
    Space Complexity: O(1)
*/
const twoSumBf = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {            
            if (arr[i]+arr[j] === target) {
                return [i, j];                
            }
        }
    }
}

const array1 = [1,4,10,-3]; //[1,-2,5,10]; // [9,5,1,23]; // [1,4,10,-3];
const tar = 14;
// const matchFound = twoSumBf(array1, tar);

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/

const twoSumMap = (arr, target) => {
    const indicesMap = {};
    for(let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if(complement in indicesMap){
            console.log(indicesMap);
            return [indicesMap[complement], i];
        }
        indicesMap[arr[i]] = i;
    }
   
}
const matchFound1 = twoSumMap(array1, tar);
console.log(matchFound1);