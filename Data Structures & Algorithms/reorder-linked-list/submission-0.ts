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

    reverse(head: ListNode | null): ListNode | null {

        let prev = null
        let curr = head

        while (curr !== null) {

            const next = curr.next

            curr.next = prev

            prev = curr
            curr = next
        }

        return prev
    }

    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {

        if (head === null || head.next === null) {
            return
        }

        // find middle
        let slow = head
        let fast = head

        while (fast !== null && fast.next !== null) {

            slow = slow.next
            fast = fast.next.next
        }

        // reverse second half
        let second = this.reverse(slow.next)

        // split list
        slow.next = null

        let first = head

        // merge alternatingly
        while (second !== null) {

            const temp1 = first.next
            const temp2 = second.next

            first.next = second
            second.next = temp1

            first = temp1
            second = temp2
        }
    }
}