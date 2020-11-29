function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map()
  strs.forEach((str) => {
    const hs = str.split('').sort().join('')
    map.set(hs, (map.get(hs) || []).concat(str))
  })

  return [...map.values()]
};