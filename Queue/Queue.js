class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

// FI FO

// +* -> * -> * -> * -> * -> *-

//  * * *
class Queue {
    constructor() {
        this.first = new Node(null);
        this.last = this.first;
        this.size = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
    }

    peek() {
        return this.first.value;
    }

    dequeue() {
        if (!this.first) throw new Error(`Underflow!`);

        const firstValue = this.first.value;
        this.first = this.first.next;
        this.size--;
        return firstValue;
    }

    print() {
        let temp = this.first;
        while (temp.next !== null) {
            process.stdout.write(`|${temp.value}| -> `);
            temp = temp.next;
        }
        console.log('null');
    }
}

const Q = new Queue();

Q.enqueue(1);
Q.enqueue(2);
Q.enqueue(3);
Q.enqueue(4);

console.log(Q.dequeue());
console.log(Q.dequeue());


// console.log(stack.peek());
Q.print();
