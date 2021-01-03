class CharNode {
  isWord: boolean = false
  next: Map<string, CharNode> = new Map<string, CharNode>()

  constructor(isWord: CharNode['isWord'] = false) {
    this.isWord = isWord
  }
}

class Trie {
  root: CharNode = new CharNode()
  size: number = 0
  insert(word: string): void {
    let cur = this.root
    for(let i = 0; i < word.length; i++) {
      let c = word.charAt(i)
      if (cur.next.get(c) === undefined) {
        cur.next.set(c, new CharNode())
      }
      cur = cur.next.get(c)
    }

    if (!cur.isWord) {
      cur.isWord = true
      this.size++
    }
  }

  search(word: string): boolean {
    let cur = this.root
    for(let i = 0; i < word.length; i++) {
      let c = word.charAt(i)
      if (cur.next.get(c) === undefined) {
        return false
      }
      cur = cur.next.get(c)
    }
    return cur.isWord
  }

  startsWith(prefix: string): boolean {
    let cur = this.root
    for(let i = 0; i < prefix.length; i++) {
      let c = prefix.charAt(i)
      if (cur.next.get(c) === undefined) {
        return false
      }
      cur = cur.next.get(c)
    }
    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */