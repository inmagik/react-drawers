import { useContext, useMemo } from "react"
import LayoutContext from "./LayoutContext"

export default function useBottomDrawer() {
  const ctx = useContext(LayoutContext)

  const value = useMemo(
    () => ({
      open: ctx.openBottom,
      close: ctx.closeBottom,
      toggle: ctx.toggleBottom,
      isOpen: ctx.bottom === ctx.bottomHeight,
    }),
    [ctx.bottom, ctx.bottomHeight, ctx.closeBottom, ctx.openBottom, ctx.toggleBottom]
  )

  return value
}
