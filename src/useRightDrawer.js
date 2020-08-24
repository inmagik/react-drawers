import { useContext, useMemo } from "react";
import LayoutContext from "./LayoutContext";

export default function useRightDrawer() {
  const ctx = useContext(LayoutContext)

  const value = useMemo(() => ({
    open: ctx.openRight,
    close: ctx.closeRight,
    toggle: ctx.toggleRight,
    isOpen: ctx.right === ctx.rightWidth
  }), [ctx.closeRight, ctx.openRight, ctx.right, ctx.rightWidth, ctx.toggleRight])

  return value
}