/*
    Implement async.series
    async.series

    Run the functions in the tasks collection in series, each one running once the previous function has completed.
    If any functions in the series pass an error to its callback, no more functions are run, and callback is immediately called with the value of the error.

*/

// Ask: call createAsyncTask functions parallely
function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

function asyncSeries(taskLists, resultsCallback) {
  let results = [];
  let taskCompleted = 0;
  taskLists.reduce((accum, currentValue) => {
    return accum.then((someValue) => {
      return new Promise((resolve, reject) => {
        currentValue((value) => {
          results.push(value);
          taskCompleted++;
          if (taskCompleted >= taskLists.length) {
            resultsCallback.call(null, results);
          } else {
            resolve(value);
          }
        });
      });
    });
  }, Promise.resolve());
}

const taskLists = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

asyncSeries(taskLists, (result) => {
  console.log("Got the result", result);
});
