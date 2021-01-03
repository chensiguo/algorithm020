function minMutation(start: string, end: string, bank: string[]): number {
  const bankSet = new Set(bank)
  // 如果没有 end 表示无法完成
  if (!bankSet.has(end)) {
    return -1
  }

  const four = ['A', 'C', 'G', 'T']
  const queue:string[] = []
  // 从起始开始
  queue.push(start)
  bankSet.delete(start)

  let step = 0
  while(queue.length > 0) {
    step++

    for(let count = queue.length; count > 0; count--) {
      let tempChars = queue.shift()!.split('')
      // 尝试在字符串中换每一个字符
      for(let i = 0, len = tempChars.length; i < len; i++) {
        // 保存状态
        let oldChar = tempChars[i]
        for(let j = 0; j < four.length; j++) {
          tempChars[i] = four[j]
          let newString = tempChars.join('')
          // 结束
          if (end === newString) {
            return step
          } else if (bankSet.has(newString)) { // 其中的一步
            bankSet.delete(newString)
            queue.push(newString)
          }
        }
        // 还原状态
        tempChars[i] = oldChar
      }
    }
  }
  return -1
};