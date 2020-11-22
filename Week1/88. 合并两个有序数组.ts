/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let j = m + n - 1
  let m1 = m - 1
  let n1 = n - 1

  while(m1 >= 0 && n1 >= 0) {
    nums1[j--] = nums1[m1] >= nums2[n1] ? nums1[m1--] : nums2[n1--]
  }


  while(n1 >= 0) {
    nums1[j--] = nums2[n1--]
  }

  while(m1 >= 0) {
    nums1[j--] = nums1[m1--]
  }
};