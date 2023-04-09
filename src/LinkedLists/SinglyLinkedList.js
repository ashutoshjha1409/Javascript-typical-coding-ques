class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirstNode(data) {
       let newNode = new Node(data);
       newNode.next = this.head;
       this.head = newNode;
       return this.head;
    }

    // Insert last node
    insertLastNode(data) {
        let newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
            return this.head;
        }

        let tail = this.head;
        while(tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head;

    }

    // Insert at index
    insertAtIndex(data, index) {
        if (!this.head){
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let previousNode = this.getAtIndex(index - 1);
        let newNode = new Node(data);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        return this.head;

    }

    // Get at index
    getAtIndex(index) {
        let counter = 0;
        let node = this.head;
        while(node){
            //console.log("node", counter, index, node)
            if(counter === index)
                return node;
            counter++;
            node = node.next;
        }
        return null;
    }

    // Remove at index
    removeAtIndex(index) {
        //if empty
        if (!this.head){
            return;
        }

        // if at first
        if(index === 0) {
            this.head = this.head.next;
            return this.head;
        }

        let prevNode = this.getAtIndex(index - 1);
        if(!prevNode || !prevNode.next)
            return;
        prevNode.next = prevNode.next.next;
        return this.head;
    }

    // Clear List
    clearList() {
        this.head = null;
    }

    // Print list data
    getAllData() {
        console.log("Printing");
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirstNode(100);
ll.insertFirstNode(200);
ll.insertLastNode(300);
ll.insertAtIndex(400, 1);
ll.insertAtIndex(500, 3);
ll.getAllData();
ll.removeAtIndex(0);
ll.removeAtIndex(3);
ll.removeAtIndex(20);
ll.getAllData();