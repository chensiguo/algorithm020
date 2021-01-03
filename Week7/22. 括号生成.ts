function generateParenthesis(n: number): string[] {
  const res: string[] = []

  if (n === 0) {
    return res
  }

  dfs("", n, n, res)

  return res

};

function dfs(currentStr: string, left: number, right: number, res: string[]) {
  if (left === 0 && right === 0) {
    res.push(currentStr)
    return
  }

  // 左括号剩余数量大于右括号需要剪枝， 例如 ())
  if (left > right) {
    return
  }

  if (left > 0) {
    dfs(currentStr + '(', left - 1, right, res)
  }

  if (right > 0) {
    dfs(currentStr + ')', left, right - 1, res)
  }
}