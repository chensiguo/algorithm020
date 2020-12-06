function permute(nums: number[]): number[][] {
  const res:number[][] = []
  // 记录已访问的节点
  const visited: number[] = new Array(nums.length).fill(0)
  const dfs = (current: number[]) => {
    if (current.length >= nums.length) {
      res.push(current)
      return
    }
    for(let i = 0; i < nums.length; i++) {
      // 未访问
      if (visited[i] === 0) {
        // 标记为已访问
        visited[i] = 1
        dfs(current.concat(nums[i]))
        // 解锁成为未访问
        visited[i] = 0
      }
    }
  }

  dfs([])

  return res
};