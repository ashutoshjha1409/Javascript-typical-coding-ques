/*
    Attach an Event listener on an Array
    For an array, create an event subscribing and publishing mechanism, where an event gets dispatched, when an item is added to an array, 
    For simplicity do not alter the push method, instead create a new pushWithEvent method.
*/

// Push method with listener
// Listener method - with event name, and arguments
// Stack listener call backs

Array.prototype.listeners = {}; // eventName: array of callbacks

Array.prototype.addListener = function (eventName, callback) {
  if (!this.listeners[eventName]) {
    this.listeners[eventName] = [];
  }
  this.listeners[eventName].push(callback);
};

Array.prototype.pushWithEvent = function () {
  const args = Array.prototype.slice.call(arguments);
  const size = this.length;
  for (let i = 0; i < args.length; i++) {
    this[size + i] = args[i];
  }
  this.triggerEvent("add", args);
};

Array.prototype.triggerEvent = function (eventName, argsList) {
  if (this.listeners[eventName] && this.listeners[eventName].length) {
    this.listeners[eventName].forEach((callback) => {
      callback(eventName, argsList, this);
    });
  }
};

const a = [];
a.addListener("add", (items, args) => {
  console.log("items were added", args);
});
a.addListener("add", (items, args) => {
  console.log("items were added again", args);
});
a.pushWithEvent(1, 2, 3, "a", "b");
console.log(a);
a.pushWithEvent("hello");
a.pushWithEvent(55);
setTimeout(() => {
  a.pushWithEvent("delayed");
}, 5000);
