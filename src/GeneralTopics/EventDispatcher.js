/*
    Implement event-dispatcher
    Question
    Implement an Event dispatcher which has a way to add listener, remove listeners and dispatch events
*/

// EventDispatcher.addEventListener()
// EventDispatcher.removeEventListener()
// EventDispatcher.dispatch(Event)

class EventDispatcher {
  constructor() {
    this._listeners = {};
  }
  addEventListener = (eventName, callback) => {
    if (this._listeners[eventName] === undefined) {
      this._listeners[eventName] = [];
    }

    if (this._listeners[eventName].indexOf(callback) === -1) {
      this._listeners[eventName].push(callback);
    }
  };

  removeEventListener = (eventName, callback) => {
    if (this._listeners[eventName] === undefined) return;
    // find event to remove
    const index = this._listeners[eventName].indexOf(callback);
    if (index !== -1) {
      this._listeners[eventName].splice(index, 1);
    }
  };
  dispatchEvent = (event) => {
    if (
      this._listeners === undefined ||
      this._listeners[event.type] === undefined
    )
      return;

    const eventListenersCopy = this._listeners[event.type].slice(0);
    event.target = this;
    for (let i = 0; i < eventListenersCopy.length; i++) {
      eventListenersCopy[i].call(this, event);
    }
  };
}
const newEvent = {
  target: null,
  type: "my-event",
};
const listener = () => {
  console.log("handled!");
};
const ed = new EventDispatcher();
ed.addEventListener("my-event", listener);
ed.dispatchEvent(newEvent);
ed.removeEventListener("my-event", listener);
ed.dispatchEvent(newEvent);
