/*
    Question : Given a non-empty array of integers, every element appears twice except for one. Find that single one.

    So if you're given an array: [2,1,5,3,1,5,2] the result will be 3 since 3 occurs once.
*/
// {
//     2: false,
//     1: false,
//     5: false,
//     3: true
// }
const array1 = [2,1,5,3,5,2, 3];

const singleNumberBF = (arr) => {
    let numOccureMap = {};

    for(let i = 0; i < arr.length; i++) {
        let present = false;
        if(numOccureMap[arr[i]]) 
            numOccureMap[arr[i]] = false;
        else
            numOccureMap[arr[i]] = true;
    }

    for (let [key, value] of Object.entries(numOccureMap)) {
        if(value)
            return key;
    }

//     let res = Object.entries(numOccureMap).filter(el => el[1] === true);
//    console.log(res[0][0])
}
// let res = singleNumberBF(array1)
// console.log(res)

/*
    Bit Manipulation O(n) time and O(1) space.
    If we take XOR of zero and some bit, it will return that bit
    a ⊕ 0 = a
    If we take XOR of two same bits, it will return 0
    a ⊕ a = 0
    So for elements [a,a,b]
    a ⊕ b ⊕ a = a ⊕ a ⊕ b = (a ⊕ a ) ⊕ b = 0 ⊕ b = b
*/

const singleNumber = (arr) =>{
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res = res ^ arr[i];
    }
    return res;

}
let res1 = singleNumberBF(array1)
console.log(res1)