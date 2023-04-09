/* 
    Method 1:
    enQueue(q, x): 
        While stack1 is not empty, push everything from stack1 to stack2.
        Push x to stack1 (assuming size of stacks is unlimited).
        Push everything back to stack1.
        Here time complexity will be O(n)

    deQueue(q): 
        If stack1 is empty then error
        Pop an item from stack1 and return it
        Here time complexity will be O(1)
    
    Method 2:
    enQueue(q,  x)
        1) Push x to stack1 (assuming size of stacks is unlimited).
        Here time complexity will be O(1)

    deQueue(q)
        1) If both stacks are empty then error.
        2) If stack2 is empty
            While stack1 is not empty, push everything from stack1 to stack2.
        3) Pop the element from stack2 and return it.
        Here time complexity will be O(n)

*/

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

class Queue {
    constructor () {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }
    enQueue = (x) => {
        this.s1.push(x);
    }

    deQueue = () => {
        if (this.s1.isEmpty() && this.s2.isEmpty())
            return false;

        if (this.s2.isEmpty()) {
            while(!this.s1.isEmpty()) {
                const newItem = this.s1.pop();
                this.s2.push(newItem);
            }
        }
        const ele = this.s2.pop();
        return ele;
    }
}

// Driver code
let q = new Queue(); 
q.enQueue(1); 
q.enQueue(2); 
q.enQueue(3); 
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
