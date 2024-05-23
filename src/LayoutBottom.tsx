import React, { useContext } from "react"
import styles from "./Layout.module.css"
import LayoutContext from "./LayoutContext"
import { before, getZIndex } from "./util"

type Props = {
  children?: React.ReactNode
  className?: string
}

export function LayoutBottom({ children, className = "" }: Props) {
  const { bottom, left, right, mode, bottomHeight } = useContext(LayoutContext)
  const style = {
    left: before(mode, "B", "L") ? 0 : left,
    right: before(mode, "B", "R") ? 0 : right,
    bottom: 0,
    transform: `translate3d(0, ${bottomHeight - bottom}px, 0)`,
    zIndex: getZIndex(mode, "B"),
  }
  return (
    <div className={`${styles.position_fixed} ${styles.layout_panel}`} style={style}>
      <div className={className} style={{ height: bottomHeight, minHeight: bottomHeight, width: "100%" }}>
        {children}
      </div>
    </div>
  )
}
