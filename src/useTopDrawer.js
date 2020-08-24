import { useContext, useMemo } from "react";
import LayoutContext from "./LayoutContext";

export default function useTopDrawer() {
  const ctx = useContext(LayoutContext)

  const value = useMemo(() => ({
    open: ctx.openTop,
    close: ctx.closeTop,
    toggle: ctx.toggleTop,
    isOpen: ctx.top === ctx.topHeight
  }), [ctx.closeTop, ctx.openTop, ctx.toggleTop, ctx.top, ctx.topHeight])

  return value
}