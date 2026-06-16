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
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {

        let len = 0
        let start = head

        while(start !== null){
            len++
            start = start.next
        }

        let indexToRemove = len - n

        if(indexToRemove === 0) return head.next

        let curr = head
        let prev = null
        let i =0

        while(i<indexToRemove){
            prev=curr
            curr = curr.next
            i++
        }

        if(prev !== null){
            prev.next = curr.next
            curr.next = null
        }

        return head

    }
}
