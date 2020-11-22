class LinkedNode {
  value: number
  next: LinkedNode | null = null
  prev: LinkedNode | null = null
  constructor(value: number) {
    this.value = value
  }
}

class MyCircularDeque {
  k: number
  head: LinkedNode | null = null
  tail: LinkedNode | null = null
  size: number = 0
  constructor(k: number) {
    this.k = k
  }

  insertFront(value: number): boolean {
    if (this.k === this.size) {
      return false
    }

    const node = new LinkedNode(value)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
    this.size++

    return true
  }

  insertLast(value: number): boolean {
    if (this.k === this.size) {
      return false
    }
    const node = new LinkedNode(value)

    if (this.tail === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }

    this.size++

    return true
  }

  deleteFront(): boolean {
    if (this.size === 0) {
      return false
    }

    const node = this.head!.next
    if (node !== null) {
      node.prev = null
      this.head = node
    } else {
      this.head = null
      this.tail = null
    }

    this.size--

    return true
  }

  deleteLast(): boolean {
    if (this.size === 0) {
      return false
    }

    const node = this.tail!.prev
    if (node !== null) {
      node.next = null
      this.tail = node
    } else {
      this.tail = null
      this.head = null
    }

    this.size--

    return true
  }

  getFront(): number {
    return this.head !== null ? this.head.value : -1
  }

  getRear(): number {
    return this.tail !== null ? this.tail.value : -1
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  isFull(): boolean {
    return this.size === this.k
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */