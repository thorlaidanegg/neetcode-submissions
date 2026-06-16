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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {

        let p1 = l1
        let p2 = l2
        let ans = null
        let head = null
        let carry = 0

        while(p1 != null && p2 != null){

            let sum = p1.val + p2.val
            let digit = (sum + carry)  % 10

            let newNode = new ListNode(digit)

            carry = Math.floor((sum + carry)/10)

            if(ans){ 
                ans.next = newNode
                ans = newNode
            }
            else{ 
                ans = newNode
                head = ans
            }
            p1 = p1.next
            p2 = p2.next
        }

        while(p1 != null){
            let newNode = new ListNode((p1.val + carry) % 10)
            ans.next = newNode
            ans = newNode
            carry = Math.floor((p1.val + carry) / 10) 
            p1 = p1.next
        }

        while(p2 != null){
            let newNode = new ListNode((p2.val + carry) % 10)
            ans.next = newNode
            ans = newNode
            carry = Math.floor((p2.val + carry) / 10) 
            p2 = p2.next
        }

        if(carry !== 0){
            let node = new ListNode(carry)
            ans.next = node
            ans = node
        }

        return head
    }
}
