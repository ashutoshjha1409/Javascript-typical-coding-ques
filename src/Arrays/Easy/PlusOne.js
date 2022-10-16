const plusOneBF = (arr) => {
    let lastEle = arr[arr.length - 1];
    let n = arr.length - 1;
    // let plusOneArr = [];
    if (lastEle !== 9){
        lastEle += 1;
        arr.splice(i-1, i, lastEle);       
        return arr;
    } else {
        let carry;
        while(n >= 0){
            if(arr[n] === 9){
                carry = true;
                arr.splice(n, 1, 0);
            }
        }
    }
}
const array = [9, 9, 9, 9];
// let res = plusOneBF(array);
//console.log(res);

const plusOne = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i] = arr[i] + 1;
      return arr;
    }
    arr[i] = 0;
  }

  let res = arr.unshift(1);
  return arr;
};

let res1 = plusOne(array);
console.log(res1);