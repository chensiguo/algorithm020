function twoSum(nums: number[], target: number): number[] {
  let res: number[] = []
  const hash: Record<number, number> = {}


  for(let i = 0; i < nums.length; i++) {
    const c = target - nums[i]

    if (c in hash) {
      res = [hash[c], i]
    } else {
      hash[nums[i]] = i
    }
  }

  return res
};

// function twoSum(nums: number[], target: number): number[] {
//   let res: number[] = []
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = 1 + i; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         res = [i, j]
//         break
//       }
//     }
//   }
//   return res
// };