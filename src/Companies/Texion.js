// Import stylesheets
import './style.css';

// Write Javascript code!

// function printNaturalNumbersAsync(n) {
//   for (var i = 1; i <= n; i++) {
//     setTimeout(
//       function (i) {
//         console.log(i);
//       },
//       100,
//       i
//     );
//   }
// }
// printNaturalNumbersAsync(5);



console.log("start");

setTimeout(() => {
    console.log("timer 1");
}, 2);

const prom = new Promise((resolve, reject) => {
    console.log("prom");
    resolve();
});

Promise.resolve().then(() => {
    console.log("resolved promise");
});
setTimeout(() => {
    console.log("timer 2");
}, 0);

setTimeout(() => {
    console.log("timer 3");
}, 1);
prom.then(() => {
    console.log("prom then");
});

console.log("end");


// requestAnimationFrame(() => {

//     console.log("rAF");

// });

// start
// end
// resolved promise
// prom
// prom then
// timer 2
// timer 3
// timer 1

const myObject = {
    myProperty: "Hello",
    myMethod: function () {
      console.log(this.myProperty);
    },
  };
  
  const myFunction = myObject.myMethod.bind(myObject);
  const myFunc = myObject.myMethod.call(myObject, 1)
  myFunction(); // undefined 
  
  
  
  
  const sum=(a,b,c)=>{
      return a+b+c;
  };
  
  const curriedSum = customCurry((a,b,c)=>{
  
  });
  
  curriedSum(a)(b)(c)
  curriedSum(a,b)(c)
  curriedSum(a,b,c)
  
  
  const customCurry = (callback)=>{
      let a = [...args].reduce((a, b) => {callback.apply(this, a, b)}, 0)
    return function (...args) {
        let b =  [...args].reduce((a, b) => { callback.apply(this, a, b)}, 0)
        if (b) {
          customCurry.apply(this, a + b);
      }
      return a;
    }
  }
  
  //Implement a rate limiter. Takes a task(function) and a limit(number) as params and returns a wrapper task (with same signature as input task) which makes sure that task is not executed with more than 'limit' executions in parallel. 
  It is given that task is a function which takes any number of params and returns a promise (Take fetch as an example). 
  eg.
  fetch('www.google.com');
  fetch('www.microsoft.com');
  fetch('www.facebook.com');
  fetch('www.netflix.com');
  
  
  const limitedFetch = limitParallelExecutions(fetch,2 // limit)
  
  // const limitParallelExecutions = (promiseArr, limit) => {
      let result = [];
    let counter = 0;
    promiseArr.map((promise) => {
        let newPromise = new Promise((resolve, reject) => {
          if (counter < limit) {
            counter++;
                   resolve((value) => {
              results.push(value);
                  counter--;
          });
        }    	
      });   
      
      
        
    })
    return result;
  }
  
  
  
  limitedFetch('www.google.com'); // execution starts right away
  limitedFetch('www.microsoft.com'); // execution starts right away
  limitedFetch('www.facebook.com'); 
  // Since the 2 executions are already in progress and we have reached the limit,
  // it should wait till the time any of the above two are completed. Lets say microsoft.com completes first, then facebook fetch happens.
  
  
  limitedFetch('www.netflix.com');
  // Since the 2 executions are already in progress and we have reached the limit, 
  //it should wait till the time any of the facebook.com and google.com completes.
  
  
  
  
  
  
  


