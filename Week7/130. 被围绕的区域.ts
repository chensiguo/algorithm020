/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  if (board === null || board.length === 0) {
    return
  }
  let m = board.length
  let n = board[0].length

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      // 从边缘上开始
      let isEdge = i === 0 || j === 0 || i === m - 1 || j === n - 1
      if (isEdge && board[i][j] === 'O') {
        dfs(board, i, j)
      }
    }
  }

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      // 将所有的 O 变成 X
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
      // 将 # 还原为 O
      if (board[i][j] === '#') {
        board[i][j] = 'O'
      }
    }
  }
};

function dfs(board: string[][], i: number, j: number) {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] === 'X' || board[i][j] === '#') {
    return
  }

  // 将 O 标记为 #
  board[i][j] = '#'

  dfs(board, i - 1, j)
  dfs(board, i + 1, j)
  dfs(board, i, j - 1)
  dfs(board, i, j + 1)
}