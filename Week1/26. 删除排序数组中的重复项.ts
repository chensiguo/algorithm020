function removeDuplicates(nums: number[]): number {
  for(let i = 0; i < nums.length; i++) {
    let v = nums[i]
    let j = i
    while(nums[j + 1] === v) {
      ++j
    }
    if (j !== i) {
      nums.splice(i + 1, j - i)
    }
  }
  return nums.length
};