class Stack {
    constructor() {
        this.items = []
    }
    push = (element) => {
        this.items.push(element);
    }
    pop = () => {
        return this.items.pop();
    }
    peek = () => {
        return this.items[this.items.length - 1]
    }
    isEmpty = () => {
        return this.items.length === 0;
    }
    clear = () => {
        this.items = [];
    }
    size = () => {
        return this.items.length;
    }
    all = () => {
        console.log("Items: ", this.items);
    }
}

const stack = new Stack();
console.log("Is Stack empty?", stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.all();
stack.pop();
stack.all();
console.log("Is Stack empty?", stack.isEmpty());
console.log("Stack size", stack.size());
stack.clear();
console.log("Stack size", stack.size());
console.log("Stack is empty", stack.isEmpty());

/* TODO
* https://learnersbucket.com/examples/algorithms/the-base-converter-algorithm/
*
*/