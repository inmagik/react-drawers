export const before = (mode, a, b) => {
  return mode.indexOf(a) < mode.indexOf(b)
} 