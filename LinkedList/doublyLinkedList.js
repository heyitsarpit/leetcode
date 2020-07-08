class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next || null;
        this.prev = prev || null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.size = 1;
    }
    prepend(value) {
        let prevHead = this.head;
        let newHead = new Node(value, prevHead);
        this.head = newHead;
        prevHead.prev = this.head;
        this.tail = prevHead;
        this.size++;
    }
    append(value) {
        let newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        // this.tail.prev = prevTail
        this.size++;
    }
    insert(value, index) {
        if (index > this.size - 1) {
            throw new Error(`Overflow - Cannot insert at index ${index}`);
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        let rest = current.next;
        current.next = new Node(value);
        current = current.next;
        current.next = rest;
        this.size++;
    }
    delete(index) {}
    print() {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(` |${current.value}| <->`);
            current = current.next;
        }
    }
}

let List = new LinkedList(1);
List.prepend(2);
List.prepend(3);
List.prepend(4);

List.append(0);
List.append(-1);
List.append(-2);

// List.insert(999, 5);
List.print();

// |_| |_| |_| |_| |_| |_| |_| |_|
//  0   1  2   3   4
