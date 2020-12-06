function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = []
  const len = nums.length
  const used = new Array(len)
  nums.sort((a, b) => a - b)

  const dfs = (current: number[]) => {
    if (current.length === len) {
      res.push(current)
      return
    }

    for(let i = 0; i < len; i++) {

      if (i - 1 >= 0 && nums[i - 1] === nums[i] && !used[i - 1]) { // nums[i - 1] === nums[i] 说明上一次使用过了
        continue
      }

      if (used[i]) {
        continue
      }

      used[i] = true
      dfs(current.concat(nums[i])) // current.concat(nums[i]) 等于 push then pop
      used[i] = false
    }
  }

  dfs([])

  return res
};