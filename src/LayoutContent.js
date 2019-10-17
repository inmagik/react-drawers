import React, { useContext } from 'react'
import LayoutContext from './LayoutContext'
import styles from "./Layout.module.css"

export const LayoutContent = ({ children, className }) => {
  const { top, left, right, bottom } = useContext(LayoutContext)
  const style = {
    left: left,
    right: right,
    top: top,
    bottom: bottom
  }
  return (
    <div className={`${styles.position_fixed} ${styles.layout_animated}`} style={style}>
      <div className={className} style={{ height: '100%', width: '100%' }}>
        {children}
      </div>
    </div>
  )
}

LayoutContent.defaultProps = {
  className: ''
}