class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left || null;
        this.right = right || null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    traverse() {}

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (value >= current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        let current = this.root;

        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else if (value === current.value) {
                return current;
            }
        }

        return false;
    }

    //           *
    //          * *
    //        * *  * *
    // * *  * *  * *   * *

    remove(value) {
        let currentNode = this.root;
        if (!currentNode) {
            throw new Error('Empty Tree');
        }
        let parentNode = currentNode;

        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                if (!currentNode.right) {
                    parentNode.
                } else if (!currentNode.right.left) {
                } else {
                }
            }
        }
    }
    print() {
        console.log(JSON.stringify(this));
    }
}

const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(12);
tree.insert(16);
tree.insert(1);
tree.insert(6);

console.log(tree.search(99));
tree.print();

tree.insert(14);
tree.print();

console.log(tree.remove(4));

tree.print();
