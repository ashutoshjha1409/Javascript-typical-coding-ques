/*
    Valid Palindrome
    
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters    include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.
*/

const isPalindrome = (str) => {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let leftIndex = 0;
    let rightIndex = str.length - 1;

    while(leftIndex < rightIndex) {
        if(str[leftIndex] !== str[rightIndex])
            return false;
        leftIndex++;
        rightIndex--;
    }
    return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));