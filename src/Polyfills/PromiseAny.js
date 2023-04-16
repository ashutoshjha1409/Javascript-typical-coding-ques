/*
    In simple terms Promise.any() is just opposite of Promise.all() .
    Reading the definition we can break the problem statement into
    multiple sub-problems and then tackle them individually to
    implement the polyfill.
    
    ● Function takes an array of promises as input and returns a new
    promise.
    ● The returned promise is resolved as soon as any of the input
    promises resolves.
    ● Else if all of the input promises are rejected then the returned
    promise is rejected with the array of all the input promises
    reasons.
*/

function task(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(time);
        }, time);
    });
}

function task2(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(time);
        }, time);
    });
}

const taskList = [task(1000), task2(5000), task(3000)];

const promiseAny = (promiseArr) => {
    let count = 0;
    let promiseErr = [];
    return new Promise((resolve, reject) => {
        promiseArr.map((promise) => {
            Promise.resolve(promise)
                .then(resolve)
                .catch((err) => {
                    promiseErr.push(err);
                    count++;
                    if (count === promiseArr.length) reject(promiseErr);
                });
        });
    });
};
promiseAny(taskList)
    .then((val) => console.log(val))
    .catch((err) => console.log(err));