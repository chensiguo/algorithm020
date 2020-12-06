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

/**
 *
 * 解题思路：
 * 两个节点 p,q 分为两种情况：

 * p 和 q 在相同子树中
 * p 和 q 在不同子树中
 * 从根节点遍历，递归向左右子树查询节点信息
 * 递归终止条件：如果当前节点为空或等于 p 或 q，则返回当前节点

 * 递归遍历左右子树，如果左右子树查到节点都不为空，则表明 p 和 q 分别在左右子树中，因此，当前 * 节点即为最近公共祖先；
 * 如果左右子树其中一个不为空，则返回非空节点。
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null || root === p || root === q) {
    return root
  }

  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)

  if (left && right) {
    return root
  }

  return left ? left : right
};