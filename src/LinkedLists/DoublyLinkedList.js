class Node {
    constructor(data) {
        this.previous = null;
        this.value = data;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            previous: null,
            value: value,
            next: null
        };
        this.length = 0;
        this.tail = this.head;
    }

    printList() {
        let arrayDLL = [];
        let current = this.head;

        while(current !== null) {
            arrayDLL.push(current.value);
            current = current.next;            
        }

        console.log(arrayDLL.join("<-->"));
        return this;
    }

    prepend(data) {
        let newNode = new Node(data);
        
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;

        this.length++;
        this.printList();
    }

    append(data) {
        let newNode = new Node(data);
        
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;

        this.length++;
        this.printList();
    }

    insert(data, index) {
        // if valid index
        if(index < 0 || index > this.length + 1 || !Number(index)) {
            console.log("Out of range");
            return;
        }

        // if index 0
        if (index === 0) {
            this.prepend();
            return this;
        }

        // if index == this.length
        if (index === this.length - 1) {
            this.append();
            return this;
        }

        // else || if index < this.length
        let newNode = new Node(data);
        let prevNode = this.head;
        

        for (let i = 0; i < index - 1; i++ ) {
            prevNode = prevNode.next;
        }
        // prevNode(next) - newNode - (prevoius)nextNode
        let nextNode = prevNode.next;
        newNode.next = nextNode;
        prevNode.next = newNode;
        newNode.previous = prevNode;
        nextNode.previous = newNode;
        
        this.length++;
        this.printList();
    }

    remove(index) {
        if(index < 0 || index > this.length + 1 || !Number(index)) {
            console.log("Out of range");
            return;
        }

        if(index === 0) {
            this.head = this.head.next;
            this.head.previous = null;
            this.length--;
            this.printList();
        }

        if (index === this.length - 1) {
            this.tail = this.tail.previous;
            this.tail.next = null;
            this.length--;
            this.printList();
        }

        let prevNode = this.head;
        
        for (let i = 0; i < index - 1; i++ ) {
            prevNode = prevNode.next;
        }

        let deleteNode = prevNode.next;
        let nextNode = deleteNode.next;

        prevNode.next = nextNode;
        nextNode.previous = prevNode;
        this.length--;
        this.printList();
        return this;
    }
}

const dll = new DoublyLinkedList('Drink Water');
dll.printList();
console.log("printing");
dll.prepend("Make Bed");
console.log("printing");
dll.append("Brush teeth");
dll.insert("Drink lemon water", 2);
dll.remove(1)