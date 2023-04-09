/*
    Promise.all() — This method returns a single Promise that fulfills when all of the promises passed as an iterable has been fulfilled or rejects with the reason of the first promise that rejects.

    Input: array of promises
    Output: all resolutions or first error

    Hints:
    Promise.resolve => to promisify non-promises
*/

const promiseAll = (promiseArr) => {
    let results = [];
    let counter = 0;
    return new Promise((resolve, reject) => {
        promiseArr.map((promise, index) => 
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    counter++;
                    if(counter === promiseArr.length)
                        resolve(results);
                }).catch(err => reject(err))
        )
    });
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {     setTimeout(resolve, 100, 'foo');
});

promiseAll([promise1, promise2, promise3])
    .then(value => console.log(value))
    .catch(err => console.log(err));
