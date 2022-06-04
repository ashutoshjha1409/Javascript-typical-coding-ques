
const removeDuplicateBF = (arr) => {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]){
            arr[index++] = arr[i+1];
        }
    }
    return index;
}

const array1 = [1, 1, 1, 1, 2, 2, 3, 3];
console.log(removeDuplicateBF(array1));