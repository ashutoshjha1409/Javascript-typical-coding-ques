/*
    Shuffle String
    s = 'MEDIUM' indices = [2,4,5,0,1,3]
    Output = 'IUMMED'   
*/

/*
    Time: O(n)
    Space: O(n)
*/
const shuffleStringBf = (str, indices) => {
    let shuffledString = [];
    for (let i = 0; i < indices.length; i++) {
        if(!shuffledString[indices[i]]) {
            shuffledString[indices[i]] = str.charAt(i);
        }
    }
    return shuffledString.join('');
}

const res = shuffleStringBf('MEDIUM', [2,4,5,0,1,3])
//console.log(res); // IUMMED

const shuffleString = (str, indices) => {
    let shuffledString = '';
    for (let i = 0; i < indices.length; i++) {
        shuffledString += str.charAt(indices.indexOf(i));
    }
    return shuffledString;
}

const res1 = shuffleString('MEDIUM', [2,4,5,0,1,3])
console.log('shuffleString', res1); // IUMMED