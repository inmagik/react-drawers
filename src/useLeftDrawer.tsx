import { useContext, useMemo } from "react"
import LayoutContext from "./LayoutContext"

export default function useLeftDrawer() {
  const ctx = useContext(LayoutContext)

  const value = useMemo(
    () => ({
      open: ctx.openLeft,
      close: ctx.closeLeft,
      toggle: ctx.toggleLeft,
      isOpen: ctx.left === ctx.leftWidth,
    }),
    [ctx.closeLeft, ctx.left, ctx.leftWidth, ctx.openLeft, ctx.toggleLeft]
  )

  return value
}
