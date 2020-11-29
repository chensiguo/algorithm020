/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let res = []

  const preorder = (root) => {
    if (root) {
      res.push(root.val)
      if (root.children) {
        root.children.forEach(child => {
          preorder(child)
        })
      }
    }
  }

  preorder(root)
  return res
};