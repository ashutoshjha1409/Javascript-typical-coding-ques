// functions
const upperCase = (str) => {
    return str.toUpperCase();
};
const reverse = (str) => {
    return str.split('').reverse().join('');
};
const append = (str) => {
    return "Hello " + str;
};
// array of functions to be piped
const arr = [upperCase, reverse, append];
// initial value
const initialValue = "learnersbucket";

const finalValue = arr.reduce((previousValue, currentElement) => {
    // pass the value through each function
    // currentElement is the function from the array
    const newValue = currentElement(previousValue);
    // return the value received from the function
    return newValue;
}, initialValue);
// console.log(finalValue);

const asyncTask = function (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Completing ${time}`), 100 * time);
    });
}
// create an array of task
const promises = [
    asyncTask(3),
    asyncTask(1),
    asyncTask(7),
    asyncTask(2),
    asyncTask(5),
];

const asyncSeriesExecuter = (promises) => {
    promises.reduce((previousValue, currentElement) => {
        return previousValue.then(() => {
            return currentElement.then(val => { console.log("v: ", val) })
        })

    }, Promise.resolve())
}

console.log("final", asyncSeriesExecuter(promises));