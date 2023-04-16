/*
    Problem statement: Implement a currying function for 4 arguments. When we have reached the limit, return the value.
    Special Case: Return the value when invoked with empty arguments

    Input:
    const res = sum(1, 2, 3, 4)();
    const res2 = sum(1)(2)(3)(4)();
    const res3 = sum(1, 2)(3, 4)();
    const res4 = sum(1, 2, 3)(4)();
    const res5 = sum(1)(2, 3, 4)(); 
    const res6 = sum();

    console.log(res, res2, res3, res4, res5, res6);

*/

const sum = (...args) => {
    let storage = [...args];
    if(storage.length === 0)
        return 0;
    else {
        const temp = (...args2) => {
            storage.push(...args2);
            if(args2.length === 0){
                return storage.reduce((a, b) => a + b, 0)
            } else 
                return temp;
        }
        return temp;
    }
}
const res = sum(1, 2, 3, 4)();
const res2 = sum(1)(2)(3)(4)();
const res3 = sum(1, 2)(3, 4)();
const res4 = sum(1, 2, 3)(4)();
const res5 = sum(1)(2, 3, 4)(); 
const res6 = sum();
// console.log(res, res2, res3, res4, res5, res6)

/*
    Problem Statement -
        Create a javascript function that will remember its previously passed
        values and return the sum of the current and previous value.

    Example
    sum( 5 ); // 5
    sum( 3 ); // 8
    sum( 4 ); // 12
    sum( 0 ); // 12
    
*/

const curry = () => {
    let sum = 0;

    return function(num = 0) {
        sum += num;
        return sum;
    }
}

const sumMethod = curry()
console.log(sumMethod(5));
console.log(sumMethod(10));
console.log(sumMethod(15));
console.log(sumMethod(0));
