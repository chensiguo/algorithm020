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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {

  if (l1 === null && l2 !== null) {
    return l2
  }

  if(l2 === null && l1 !== null) {
    return l1
  }

  if (l2 === null && l1 === null) {
    return null
  }

  let l3 = null
  let head = null

  while(l1 !== null || l2 !== null) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        if (l3) {
          l3.next = l1
          l3 = l3.next
        } else {
          head = l3 = l1
        }
        l1 = l1.next

      } else {
        if (l3) {
          l3.next = l2
          l3 = l3.next
        } else {
          head = l3 = l2
        }
        l2 = l2.next
      }
    } else {
      if (l1) {
        l3!.next = l1
        l1 = null
      }
      if (l2) {
        l3!.next = l2
        l2 = null
      }
    }
  }

  return head
};