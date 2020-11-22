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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  // 创建一个 dummy head 节点用于方便取
  const dummyHead = new ListNode(0, head)
  // 每次以 K 分组的 prev
  let pre = dummyHead

  while(head) {
    let tail:ListNode | null = pre

    // 查看后面部分是否大于等于 K
    for(let i = 0; i < k; i++) {
      tail = tail.next!

      if (tail === null) {
        // 直接返回
        return dummyHead.next
      }
    }

    const next = tail.next

      // 传入 head tail 进行交换
    ;[head, tail] = reverseList(head, tail)

    // 交换后接回原链表
    pre.next = head
    tail.next = next

    // 更新指针
    pre = tail
    head = tail.next

  }

  return dummyHead.next
};


function reverseList(head: ListNode, tail: ListNode) {
  let prev = tail.next
  let p:ListNode = head

  while(prev !== tail) {
    // 下次要处理的指针位置
    const next = p.next
    // 第1次是 tail.next，之后是上次的指针位置
    p.next = prev
    // 交换职责，下次处理时，p 就已经成为了过去。
    prev = p
    p = next!
  }
  // 处理完之后 tail 就是 head
  return [tail, head]
}