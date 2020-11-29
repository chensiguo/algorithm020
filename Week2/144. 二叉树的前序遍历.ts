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

function preorderTraversal(root: TreeNode | null): number[] {
  return preorder(root)
};


function preorder(root: TreeNode | null) {
  const res: number[] = []
  function preorder(root: TreeNode | null) {
    if (root) {
      res.push(root.val)
      preorder(root.left)
      preorder(root.right)
    }
  }

  preorder(root)
  return res
}