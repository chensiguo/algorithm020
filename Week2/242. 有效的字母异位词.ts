function isAnagram(s: string, t: string): boolean {

  if (s.length !== t.length) {
    return false
  }

  let cache: Record<string, number> = {}

  for(let i = 0; i < s.length; i++) {
    cache[s[i]] = (cache[s[i]]  || 0) + 1
  }

  for(let j = 0; j < t.length; j++) {
    let x = t[j]
    if (!cache[x] || --cache[x] < 0) {
      return false
    }
  }
  return true
};

// function isAnagram(s: string, t: string): boolean {
//   return s.split('').sort().join('') === t.split('').sort().join('')
// };