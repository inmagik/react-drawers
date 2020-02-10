import React, { useContext } from 'react'
import LayoutContext from './LayoutContext'
import { before, getZIndex } from './util'
import styles from "./Layout.module.css"

export const LayoutRight = ({ children, className }) => {
  const { top, bottom, right, mode, rightWidth } = useContext(LayoutContext)
  const style = {
    top: before(mode, 'R', 'T') ? 0 : top,
    bottom: before(mode, 'R', 'B') ? 0 : bottom,
    right: 0,
    transform: `translate3d(${rightWidth - right}px, 0, 0)`,
    zIndex: getZIndex(mode, 'R')
  }
  return (
    <div className={`${styles.position_fixed} ${styles.layout_panel}`} style={style}>
      <div className={className} style={{ width: rightWidth, minWidth: rightWidth, height: '100%' }}>
        {children}
      </div>
    </div>
  )
}

LayoutRight.defaultProps = {
  className: ''
}