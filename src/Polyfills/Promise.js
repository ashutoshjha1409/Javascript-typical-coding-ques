/* 
    Promise polyfill basic implementation
    Step 1: implement a constructor function
    Step 2: executor to be called with resolve and reject as parameter
    Step 3: chaining
    Step 4: When Async operation is completed, call resolve & reject
    Step 5: Support direct values
    Step 6: Helper functions
*/
function MyPromise(executor) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isRejected = false,
    isCalled = false,
    value,
    error;

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(err) {
    isRejected = true;
    error = err;
    if (typeof onReject === "function" && !isCalled) {
      onReject(err);
      isCalled = true;
    }
  }

  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if (!isCalled && isFullfilled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };
  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      onReject(error);
      isCalled = true;
    }
    return this;
  };
  executor(resolve, reject);
}

MyPromise.resolve = (val) => {
  return new MyPromise(function executor(resolve, reject) {
    resolve(val);
  });
};

MyPromise.reject = (val) => {
  return new MyPromise(function executor(resolve, reject) {
    reject(val);
  });
};

MyPromise.all = function (promises) {
  return new MyPromise(function executor(resolve, reject) {
    let cnt = 0,
      res = [];

    if (promises.length === 0) {
      resolve(promises);
      return;
    }

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((val) => {
          done(val, i);
        })
        .catch((err) => console.log(err));
    }

    function done(value, i) {
      res[i] = value;
      ++cnt;
      if (promises.length === cnt) {
        resolve(res);
      }
    }
  });
};

const exPolyfill = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});
const exPolyfill2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

exPolyfill.then((val) => console.log(val)).catch((err) => console.log(err));
let results = MyPromise.all([exPolyfill, exPolyfill2]); // returns promise
results.then((val) => console.log(val)).catch((err) => console.log(err));
