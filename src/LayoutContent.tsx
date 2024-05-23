import React, { useContext } from "react"
import LayoutContext from "./LayoutContext"
import styles from "./Layout.module.css"

type Props = {
  children?: React.ReactNode
  className?: string
}

export function LayoutContent({ children, className = "" }: Props) {
  const { top, left, right, bottom, topOverContent, leftOverContent, rightOverContent, bottomOverContent } =
    useContext(LayoutContext)
  const style = {
    left: leftOverContent ? 0 : left,
    right: rightOverContent ? 0 : right,
    top: topOverContent ? 0 : top,
    bottom: bottomOverContent ? 0 : bottom,
  }
  return (
    <div className={`${styles.position_fixed} ${styles.layout_animated}`} style={style}>
      <div className={className} style={{ height: "100%", width: "100%" }}>
        {children}
      </div>
    </div>
  )
}
