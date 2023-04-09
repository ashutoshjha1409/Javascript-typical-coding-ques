/*
    Promise Race
*/

Promise.raceProm = (promiseArr) => {
    return new Promise((resolve, reject) => {
        promiseArr.map((promise) => 
            Promise.resolve(promise)
                .then(value => resolve(value))
                .catch(err => reject(err))
        )
    })
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => 
  setTimeout(reject, 100,'foo')
); 
const promise3 = 43;

Promise.raceProm([promise2, promise3, promise1])
    .then(value => console.log(value))
    .catch(err => console.log(err))
