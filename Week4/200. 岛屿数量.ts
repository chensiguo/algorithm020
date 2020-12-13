function numIslands(grid: string[][]): number {
  const rowCount = grid.length
  if (rowCount === 0) {
    return 0
  }
  const colCount = grid[0].length

  const dfs = (grid: string[][], r: number, c: number) => {
    const rowCount = grid.length
    const colCount = grid[0].length

    grid[r][c] = '0'

    if (r - 1 >= 0 && grid[r - 1][c] === '1') dfs(grid, r - 1, c)
    if (r + 1 < rowCount && grid[r + 1][c] === '1') dfs(grid, r + 1, c)
    if (c - 1 >= 0 && grid[r][c - 1] === '1') dfs(grid, r, c - 1)
    if (c + 1 < colCount && grid[r][c + 1] === '1') dfs(grid, r, c + 1)
  }

  let islandsCount = 0

  for(let r = 0; r < rowCount; r++) {
    for(let c = 0; c < colCount; c++) {
      if (grid[r][c] === '1') {
        islandsCount++

        dfs(grid, r, c)
      }
    }
  }

  return islandsCount
};