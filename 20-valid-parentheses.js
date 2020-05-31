class Stack {
    constructor() {
        this.top = null;
        this.stack = [];
        this.size = 0;
    }
    push(elem) {
        this.size++;
        this.top = elem;
        this.stack.push(elem);
    }
    pop() {
        this.size--;
        this.top = this.stack[this.stack.length - 1];
        return this.stack.pop();
    }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = {
        '[': ']',
        '(': ')',
        '{': '}'
    };

    let stack = [];

    function truncate(stack) {
        if (stack.length <= 1 || stack[stack.length - 1] in map) {
            return;
        }

        if (stack[stack.length - 1] === map[stack[stack.length - 2]]) {
            stack.pop();
            stack.pop();
        }

        return;
    }

    for (char of [...s]) {
        stack.push(char);
        truncate(stack);
    }

    // console.log(stack.stack);
    return stack.length === 0;
};

// var isValid = function (s) {
//     const map = {
//         '[': ']',
//         '(': ')',
//         '{': '}'
//     };

//     let count = 0;
//     [...s].forEach((paren, index, arr) => {
//         paren in map ? (count += 1) : paren === arr[index - 1] ? (count -= 1) : {};
//     });

//     return count === 0;
// };

// (((((())))))((((()))))
console.log(isValid('(([]([]))[][[{{}}}]])'));
