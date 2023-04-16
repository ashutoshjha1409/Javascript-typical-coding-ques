/*
    Create a pausable auto incrementor in JavaScript, which takes an
    initial value and steps as input and increments the initial value with
    given steps every second. The incrementer can be paused and resumed
    back.
*/

const timer = (initial, steps) => {
    let count = initial;
    let intervalId;
    function startTimer() {
        if (!intervalId) {
            intervalId = setInterval(() => {
                console.log("Timer: ", count);
                count += steps;
            }, 1000)
        }
    }

    function stopTimer() {
        clearInterval(intervalId);
        intervalId = null;
    }

    return {
        startTimer, stopTimer
    }

}

const timerObj = timer(10, 10);
console.log(timerObj.startTimer())
setTimeout(() => {
    timerObj.stopTimer()
}, 10000)