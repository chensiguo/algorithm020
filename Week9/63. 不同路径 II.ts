function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let row = obstacleGrid.length
  let col = obstacleGrid[0].length

  // 默认都为0
  let dp = new Array(row).fill([]).map(() => new Array(col).fill(0))

  // 第一行、第一行如果存在障碍物为 0 种走法，否则为 1
  for(let i = 0; i < row && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1
  }
  for(let j = 0; j < col && obstacleGrid[0][j] === 0; j++) {
    dp[0][j] = 1
  }


  for(let i = 1; i < row; i++) {
    for(let j = 1; j < col; j++) {
      if (obstacleGrid[i][j] === 0) {
        // dp[i][j] 由有 上方 和 左方 的走法之各得到
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  return dp[row - 1][col - 1]
};