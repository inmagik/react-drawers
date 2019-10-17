import React, { useContext } from 'react'
import LayoutContext from './LayoutContext'
import { before } from './util'
import styles from "./Layout.module.css"

export const LayoutTop = ({ children, className }) => {
  const { top, left, right, mode, topHeight } = useContext(LayoutContext)
  const style = {
    left: before(mode, 'T', 'L') ? 0 : left,
    right: before(mode, 'T', 'R') ? 0 : right,
    top: 0,
    transform: `translate3d(0, ${top - topHeight}px, 0)`
  }
  return (
    <div className={`${styles.position_fixed} ${styles.layout_panel}`} style={style}>
      <div className={className} style={{ height: topHeight, minHeight: topHeight, width: '100%' }}>
        {children}
      </div>
    </div>
  )
}

LayoutTop.defaultProps = {
  className: ''
}