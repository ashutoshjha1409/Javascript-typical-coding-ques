/*
    async.parallel
    Run the tasks collection of functions in parallel, without waiting until the previous function has completed. 
    If any of the functions pass an error to its callback, the main callback is immediately called with the value of the error.
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

function asyncParallel(taskLists, resultsCallback) {
  let result = [];
  let taskCompleted = 0;
  taskLists.forEach((asyncTask) => {
    asyncTask((value) => {
      result.push(value);
      taskCompleted++;
      if (taskCompleted >= taskLists.length) {
        resultsCallback.call(null, result);
      }
    });
  });
}

const taskLists = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

asyncParallel(taskLists, (result) => {
  console.log("Got the result", result);
});
