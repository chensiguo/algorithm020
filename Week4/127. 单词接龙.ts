function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  // 第 1 步：先将 wordList 放到哈希表里，便于判断某个单词是否在 wordList 里
  const wordSet = new Set(wordList)
  if (wordSet.size === 0 || !wordSet.has(endWord)) {
    return 0
  }
  wordSet.delete(beginWord)

  // 第 2 步：图的广度优先遍历，必须使用队列和表示是否访问过的 visited 哈希表
  const queue: string[] = []
  queue.push(beginWord)
  const visited: Set<string> = new Set()
  visited.add(beginWord)


  // 第 3 步：开始广度优先遍历，包含起点，因此初始化的时候步数为 1
  let step = 1
  while(queue.length) {
    const size = queue.length

    for(let i = 0; i < size; i++) {
      // 依次遍历当前队列中的单词
      const currentWord = queue.shift()!

      // 如果 currentWord 能够修改 1 个字符与 endWord 相同，则返回 step + 1
      if (changeWordEveryOneLetter(currentWord, endWord, queue, visited, wordSet)) {
        return step + 1
      }
    }

    step++
  }

  return 0
};

const letters = 'abcdefghijklmnopqrstuvwxyz'
function changeWordEveryOneLetter(currentWord: string, endWord: string, queue: string[], visited: Set<string>, wordSet: Set<string>): boolean {
  let charArray = currentWord.split('')
  for(let i = 0; i < endWord.length; i++) {
    let originChar = charArray[i]
    // 遍历换当前位的字母从26个都试一次，看是否存在于 wordSet 中
    for(let k = 0; k < letters.length; k++) {
      const ch = letters[k]
      if (ch === originChar) {
        continue
      }

      charArray[i] = ch
      const nextWord = charArray.join('')
      if (wordSet.has(nextWord)) {
        if (nextWord === endWord) {
          return true
        }
        if (!visited.has(nextWord)) {
          queue.push(nextWord)
          // 注意：添加到队列以后，必须马上标记为已经访问
          visited.add(nextWord)
        }
      }
    }
    // 还原
    charArray[i] = originChar
  }
  return false
}