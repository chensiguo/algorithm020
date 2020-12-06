function combine(n: number, k: number): number[][] {
  const res: number[][] = []

  const dfs = (index: number, current:number[]) => {
    if (current.length === k) {
      res.push(current)
      return
    }

    for(let i = index; i <= n; i++) {
      dfs(i + 1, current.concat(i)) // 等于 push then pop
    }
  }

  dfs(1,  [])



  return res
};