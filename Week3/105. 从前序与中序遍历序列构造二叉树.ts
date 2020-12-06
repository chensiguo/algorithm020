/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let preLen = preorder.length
  let inLen = inorder.length
  if (preLen !== inLen) {
    return null
  }

  let map: Map<number, number> = new Map()

  for(let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }

  const buildTreeNode = (preorder: number[], preLeft: number, preRight: number, map: Map<number, number>, inLeft: number, inRight: number) => {
    if (preLeft > preRight || inLeft > inRight) {
      return null
    }

    let rootVal = preorder[preLeft]
    // 从 inorder 中找出 root 的位置方便算出 preorder 和 inorder 中左右子树的范围
    let pIndex = map.get(rootVal)!

    let root:TreeNode = new TreeNode(rootVal)


    root.left = buildTreeNode(preorder, preLeft + 1, pIndex - inLeft + preLeft, map, inLeft, pIndex - 1)
    root.right = buildTreeNode(preorder, pIndex - inLeft + preLeft + 1, preRight, map, pIndex + 1, inRight)

    return root

  }

  return buildTreeNode(preorder, 0, preLen - 1, map, 0, inLen - 1)
};