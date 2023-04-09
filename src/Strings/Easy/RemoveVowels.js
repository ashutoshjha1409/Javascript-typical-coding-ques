/*
    Given a string, remove the vowels from the string and print the string without vowels. 
    Input : welcome to geeksforgeeks
    Output : wlcm t gksfrgks

    Input : what is your name ?
    Output : wht s yr nm ?
*/

const str1 = 'welcome to geeksforgeeks';
const str2 = 'what is your name?';

/*
    For example, `[abc]` matches the characters `a`, `b` and `c`.

    We used the `g` (global) flag because we want to match all occurrences of a vowel in the string and not just the first one.

    The `i` flag is used to make the search case insensitive. These two regular expressions are the same:

    `/[aeiou]/gi`
    `/[aeiouAEIOU]/g`

    Time Complexity: O(n), where n is the length of the string
    Space Complexity: O(1)
*/


const removeVowels = (str) => {
    const noVowels = str.replace(/[aeiou]/gi, '');
    console.log(noVowels);
}
removeVowels(str1);
removeVowels(str2);
/*
    Time Complexity: O(n), where n is the length of the string
    Space Complexity: O(n), where n is the length of the string
*/
const removeVowelsBF = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let newString = '';
    for(let i = 0; i < str.length; i++) {
        if(vowels.indexOf(str[i]) < 0){
            newString += str[i];
        }
    }
    console.log(newString);
}

// removeVowelsBF(str1);
// removeVowelsBF(str2);