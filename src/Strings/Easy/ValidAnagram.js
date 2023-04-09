/*
    Valid Anagram    
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.    

    Example 1:

    Input: s = "anagram", t = "nagaram"
    Output: true
    Example 2:

    Input: s = "rat", t = "car"
    Output: false
*/

const validAnalagram = (src, tar) => {
    let keysMap = {};
    if(src.length !== tar.length) return false;

    for (let i = 0; i < src.length; i++) {
        if(!keysMap[src[i]]) 
            keysMap[src[i]] = 1;
        else 
        keysMap[src[i]] = keysMap[src[i]] + 1;
    }
   
    for (let i = 0; i < tar.length; i++) {
        if(!(tar[i] in keysMap)) 
            return false;
        else 
            keysMap[src[i]] = keysMap[src[i]] - 1;
    }
    
    for (let i of Object.values(keysMap)) {
        if (i > 0)
            return false;
        
    }
    return true;
    
}

let res = validAnalagram('inch', 'chint');
console.log("res", res)