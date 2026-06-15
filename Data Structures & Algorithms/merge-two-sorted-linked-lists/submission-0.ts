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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {

        let p1 = list1
        let p2 = list2

        let head = null
        let tail = head

        if(list1 === null) return list2
        if(list2 === null) return list1

        while(p1 != null && p2 != null){

            if(p1.val < p2.val){
                let newNode = new ListNode(p1.val)
                if(tail === null){
                    head = newNode
                    tail = newNode
                }else{
                    tail.next = newNode
                    tail = newNode
                }
                p1 = p1.next  
            }else{
                let newNode = new ListNode(p2.val)
                if(tail === null){
                    head = newNode
                    tail = newNode
                }else{
                    tail.next = newNode
                    tail = newNode
                }
                p2 = p2.next
            }

        }

        while(p1 != null){
            let newNode = new ListNode(p1.val)
            tail.next = newNode
            tail = newNode
            p1 = p1.next            
        }

        while(p2 != null){
            let newNode = new ListNode(p2.val)
            tail.next = newNode
            tail = newNode
            p2 = p2.next            
        }

        return head

    }
}
