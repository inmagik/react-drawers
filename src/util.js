export const before = (mode, a, b) => {
  return mode.indexOf(a) < mode.indexOf(b)
} 

export const getZIndex = (mode, item) => {
  const idx = mode.indexOf(item)
  if(idx === -1){
    return undefined
  }
  return 4 - idx
}