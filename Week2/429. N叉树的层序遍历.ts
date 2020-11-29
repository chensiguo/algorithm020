/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
  if (root === null) {
    return []
  }

  let res: number[][] = []

  let prev: Node[] = [root]
  while(prev.length) {
    let result = []
    let current: Node[] = []

    for(let i = 0; i < prev.length; i++) {
      const item = prev[i]
      result.push(item.val)
      if (item.children) {
        current.push(...item.children)
      }
    }
    prev = current
    res.push(result)
  }


  return res
};