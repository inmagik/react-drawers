import React, { useContext } from "react"
import LayoutContext from "./LayoutContext"
import { before, getZIndex } from "./util"
import styles from "./Layout.module.css"

type Props = {
  children?: React.ReactNode
  className?: string
}

export function LayoutTop({ children, className = "" }: Props) {
  const { top, left, right, mode, topHeight } = useContext(LayoutContext)
  const style = {
    left: before(mode, "T", "L") ? 0 : left,
    right: before(mode, "T", "R") ? 0 : right,
    top: 0,
    transform: `translate3d(0, ${top - topHeight}px, 0)`,
    zIndex: getZIndex(mode, "T"),
  }
  return (
    <div className={`${styles.position_fixed} ${styles.layout_panel}`} style={style}>
      <div className={className} style={{ height: topHeight, minHeight: topHeight, width: "100%" }}>
        {children}
      </div>
    </div>
  )
}
