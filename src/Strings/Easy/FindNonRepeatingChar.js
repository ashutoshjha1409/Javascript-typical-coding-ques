/*
    Given a string S, write a program to find the first non-repeating character in it and return its index.
    Problem Note

    If a non-repeating character doesn’t exist, return -1.
    You may assume the string contains only lowercase letters.

    Input: S = "afteracademy"
    Output: 1
    Input: S = "mindorks"
    Output: 0

    Input: S = "abacdcdb"
    Output: -1
*/
/*
    Brute force
*/
const findNRCBF = (str) => {
    let strArr = str.split('');
    let currentNRC = [];
    for (let i = 0; i < strArr.length; i++) {
        let indexOI = currentNRC.indexOf(strArr[i]);
        if (indexOI > -1) {
            currentNRC.splice(indexOI, 1);
        } else {
            currentNRC.push(strArr[i])
        }
    }
    return strArr.indexOf(currentNRC[0]);
}
// console.log(findNRCBF('afteracademy'));

const findNRC = (src) => {
    const charMap = {};
    let strArr = src.split('');
    for (let i = 0; i < src.length; i++) {
        if (!charMap[strArr[i]]) {
            charMap[strArr[i]] = 1;
        } else 
        charMap[strArr[i]] = charMap[strArr[i]] + 1;
    }
    for (const [key, value] of Object.entries(charMap)) {
        if (charMap[key] === 1) return strArr.indexOf(key);
    }
}
console.log(findNRC('afteracademy'));