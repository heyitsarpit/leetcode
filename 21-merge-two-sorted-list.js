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
    let l3 = new ListNode();
    while (l1.next != null && l1.next != null) {
        l3.val = l1.val > l2.val ? l1.val : l2.val;
        l1 = l1.next
        l2 = l2.next
    }
};
