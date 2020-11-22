function trap(height: number[]): number {
  let stack = []
  let ans = 0

  const peek = (stack: number[]) => stack[stack.length - 1]

  for(let i = 0; i < height.length; i++) {
    while(stack.length > 0 && height[peek(stack)] < height[i]) {
      let curIdx = stack.pop()!

      while(stack.length > 0 && height[peek(stack)] === height[curIdx]) {
        stack.pop()
      }

      if (stack.length > 0) {
        let stackTop = peek(stack)
        ans += (Math.min(height[stackTop], height[i]) - height[curIdx]) * (i - stackTop - 1)
      }
    }

    stack.push(i)
  }

  return ans
};