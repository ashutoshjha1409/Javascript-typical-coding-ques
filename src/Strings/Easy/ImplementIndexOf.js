/*
    Implement StrStr    
    Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

    Input: haystack = "hello", needle = "ll"
    Output: 2

    Input: haystack = "aaaaa", needle = "bba"
    Output: -1

    Input: haystack = "", needle = ""
    Output: 0

    Assumptions:
    1. needle & haystring is in lowercase
*/

const getIndexOf = (haystring, needle) => {
    const needleLen = needle.length;
    let curIndex = 0;
    if(needleLen < 1 ) return 0;
    while (curIndex <= (haystring.length - needleLen)) {
        let match = haystring.substring(curIndex, needleLen+curIndex);
        if(match === needle) return curIndex;
        curIndex++;
    }
    return -1;
}

console.log(getIndexOf('', ''));