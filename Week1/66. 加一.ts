function plusOne(digits: number[]): number[] {

  digits[digits.length - 1] = digits[digits.length - 1] + 1

  let j = 0

  for(let i = digits.length - 1; i >= 0; i--) {
    if (j === 1) {
      digits[i] += j
      j = 0
    }

    if (digits[i] === 10) {
      j = 1
      digits[i] = 0
    } else {
      break
    }
  }

  if (j === 1) {
    digits.unshift(1)
  }


  return digits
};