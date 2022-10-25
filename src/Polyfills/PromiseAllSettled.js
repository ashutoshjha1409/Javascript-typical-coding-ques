/*
    Promise.allSettled() — This method returns a promise that resolves after all of the given promises have either resolved or rejected, 
    with an array of objects that each describes the outcome of each promise.

    We don't want to terminate bcoz all promises must be either fullfilled or rejected
*/

const allSettledPromise = (promiseArr) => {
    let results = promiseArr.map((promise) => 
        Promise.resolve(promise)
            .then((value) => ({
                    status: 'resolved',
                    value
                })
            )
            .catch(err =>  ({
                    status: 'rejected',
                    value: err
                })
            )
    );
    return Promise.all(results);
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => 
  setTimeout(reject, 100,'foo')
); 
const promise3 = 43;

allSettledPromise([promise1, promise2, promise3])
    .then((value) => console.log(value))