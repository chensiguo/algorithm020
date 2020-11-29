function topKFrequent(nums: number[], k: number): number[] {
  let cache: Map<number, number> = new Map()

  for(let i = 0; i < nums.length; i++) {
    let x = nums[i]
    let n = cache.get(x)
    if (n === undefined) {
      cache.set(x, 1)
    } else {
      cache.set(x, n + 1)
    }
  }


  return [...cache.entries()].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, k)
};