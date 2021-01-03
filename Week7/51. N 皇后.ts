function solveNQueens(n: number): string[][] {
  const board = new Array(n)
  for(let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')
  }

  let res: string[][] = []

  const cols = new Set()  // 出现皇后的列
  const diag1 = new Set() // 正对角线
  const diag2 = new Set() // 反对角线


  const dfs = (row: number) => {
    if (row === n) {
      res.push(board.map(row => row.join('')))
      return
    }

    for(let col = 0; col < n; col++) {
      if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
        board[row][col] = 'Q'
        cols.add(col)
        diag1.add(row + col)
        diag2.add(row - col)
        console.log('111', cols, diag1, diag2)
        dfs(row + 1)
        board[row][col] = '.'
        cols.delete(col)
        diag1.delete(row + col)
        diag2.delete(row - col)
      }
    }
  }

  dfs(0)

  return res
};