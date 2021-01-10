function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])

  let res = new Array(intervals.length)

  let idx = -1

  for(let i = 0; i < intervals.length; i++) {
    let interval = intervals[i]

    // 如果结果数组为空 或者 当前区间起始位置 > 结果中最后区间的终止位置
    // 刚不合并，直接将当前的区间加入结果数组
    if (idx === -1 || interval[0] > res[idx][1]) {
      res[++idx] = interval
    } else {
      // 反之将当前区间合并到结果数组的最后区间
      res[idx][1] = Math.max(res[idx][1], interval[1])
    }
  }

  // 只取有结果的子数组
  return res.slice(0, idx + 1)
};