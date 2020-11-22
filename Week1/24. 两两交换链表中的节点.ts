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

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0, head)

  let prev = dummyHead

  while(prev.next && prev.next.next) {

    const node1 = prev.next // 1
    const node2 = prev.next.next // 2

    prev.next = node2 // 1 -> 2

    // 2, 1, 3
    node1.next = node2.next //  1 -> 3
    node2.next = node1 // 2 -> 1


    prev = node1 // 0 -> 2

  }


  return dummyHead.next
};