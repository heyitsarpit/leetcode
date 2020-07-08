/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Definition for singly-linked list
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    const r = new ListNode(-Infinity);
    let l = r;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            l.next = l1;
            l1 = l1.next;
        } else {
            l.next = l2;
            l2 = l2.next;
        }
        l = l.next;
    }
    if (l1) l.next = l1;
    if (l2) l.next = l2;
    return r.next;
};

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(4);
l2.next.next.next = new ListNode(5);

console.log(mergeTwoLists(l1, l2));
