import { useContext } from "react"
import styles from "./Layout.module.css"
import LayoutContext from "./LayoutContext"
import { before, getZIndex } from "./util"

type Props = {
  children?: React.ReactNode
  className?: string
}

export function LayoutLeft({ children, className = "" }: Props) {
  const { top, bottom, left, leftWidth, mode } = useContext(LayoutContext)
  const style = {
    top: before(mode, "L", "T") ? 0 : top,
    bottom: before(mode, "L", "B") ? 0 : bottom,
    left: 0,
    transform: `translate3d(${left - leftWidth}px, 0, 0)`,
    zIndex: getZIndex(mode, "L"),
  }
  return (
    <div className={`${styles.position_fixed} ${styles.layout_panel}`} style={style}>
      <div className={className} style={{ width: leftWidth, minWidth: leftWidth, height: "100%" }}>
        {children}
      </div>
    </div>
  )
}
