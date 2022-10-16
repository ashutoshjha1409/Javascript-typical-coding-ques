/*
    What is throttle function?

    Throttling is a technique, to limit the execution of an event handler function, even when this event triggers continuously due to user actions. (ex: browser resizing)
*/

const throttle = (func, delay) => {
    let toThrottle = false;
    return function () {
        if (!toThrottle) {
            toThrottle = true;
            func.apply(this, arguments)
            setTimeout(() => {
                toThrottle = false
            }, delay);
        }
    };
};
