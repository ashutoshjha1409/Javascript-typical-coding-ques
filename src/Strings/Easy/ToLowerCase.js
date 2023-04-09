/*
    To Lower case
    Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

    s = "Hello" => "hello"
    "here" =>  "here"
    "LOVELY" => "lovely"

    ASCII code: A-Z: 65-90, a-z: 97-122
*/

const toLowerCase = (str) => {
    let lowerCaseStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].charCodeAt();        
        lowerCaseStr += (char >  64 && char < 91) ? String.fromCharCode(char + 32) : str[i]
    }
    return lowerCaseStr;
}

console.log(toLowerCase('AShuTOsH'));
