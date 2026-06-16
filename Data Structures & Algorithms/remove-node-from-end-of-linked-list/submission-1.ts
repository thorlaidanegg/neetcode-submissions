/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {

    removeNthFromEnd(
        head: ListNode | null,
        n: number
    ): ListNode | null {

        const dummy =
            new ListNode(0, head)

        let slow = dummy
        let fast = dummy

        // move fast ahead by n+1
        for (let i = 0; i <= n; i++) {
            fast = fast.next
        }

        // move together
        while (fast !== null) {

            slow = slow.next
            fast = fast.next
        }

        // delete node
        slow.next = slow.next.next

        return dummy.next
    }
}