import { useEffect, useRef } from "react"

export function before(mode: string, a: string, b: string) {
  return mode.indexOf(a) < mode.indexOf(b)
}

export function getZIndex(mode: string, item: string) {
  const idx = mode.indexOf(item)
  if (idx === -1) {
    return undefined
  }
  return 4 - idx
}

export function usePrevious<T>(val: T): T | undefined {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = val
  }, [val])
  return ref.current
}
