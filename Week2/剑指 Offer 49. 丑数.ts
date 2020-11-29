function nthUglyNumber(n: number): number {
  // 任意一个丑数都是 某个丑数 * 2/3/5 得到， 除了 1 。
  let dp = []
  dp[0] = 1 // 设置第一个丑数

  let a = 0, b = 0, c = 0

  for(let i = 1; i < n; i++) {
    // 递推公式如下， 最小的那个作为下一个丑数
    let n2 = dp[a] * 2;
    let n3 = dp[b] * 3;
    let n5 = dp[c] * 5;
    let n = Math.min(n2, n3, n5)

    dp.push(n)

    // 丑数的那个索引
    if (n === n2) a++
    if (n === n3) b++
    if (n === n5) c++

  }

  return dp[dp.length - 1]
};