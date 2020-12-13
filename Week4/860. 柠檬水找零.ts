function lemonadeChange(bills: number[]): boolean {
  const hash: Map<number, number> = new Map()
  const get = (n: number) => hash.get(n) || 0
  for(let i = 0; i < bills.length; i++) {
    let c = bills[i]

    switch(c) {
      case 5: {
        hash.set(5, get(5) + 1)
        break
      }
      case 10: {
        hash.set(10, get(10) + 1)
        if (get(5) > 0) {
          hash.set(5, get(5) - 1)
        } else {
          return false
        }
        break
      }
      case 20: {
        hash.set(20, get(20) + 1)
        if (get(10) > 0 && get(5) > 0) {
          hash.set(5, get(5) - 1)
          hash.set(10, get(10) - 1)
        } else if(get(5) >= 3) {
          hash.set(5, get(5) - 3)
        }
        else {
          return false
        }
      }
    }
  }

  return true
};