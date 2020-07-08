class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

class Stack {
    constructor() {
        this.top = new Node(null);
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    peek() {
        return this.top.value;
    }

    pop() {
        if (!this.top) throw new Error(`Underflow!`);

        const top = this.top.value;
        this.top = this.top.next;
        this.size--;
        return top;
    }

    print() {
        let temp = this.top;
        while (temp.next !== null) {
            console.log(`|${temp.value}|`);
            temp = temp.next;
        }
        console.log('null');
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());
stack.print();
