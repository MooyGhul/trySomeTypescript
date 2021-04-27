/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

//      prev curr next
//           1    2    3    4    null

function reverseList(curr: ListNode | null): ListNode | null {
  if(curr === null || curr.next === null){
      return curr;
  }
  let prev: ListNode =null;
  while(curr !== null){
      const next: ListNode = curr.next;
      curr.next = prev;
      prev=curr;
      curr=next;
  }
  return prev;
};