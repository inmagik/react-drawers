import React, { useContext } from 'react'
import LayoutContext from './LayoutContext'
import styles from "./Layout.module.css"

export const LayoutContent = ({ children, className }) => {
  const { top, left, right, bottom, topOverContent, leftOverContent, rightOverContent, bottomOverContent } = useContext(LayoutContext)
  const style = {
    left: leftOverContent ? 0 : left,
    right: rightOverContent ? 0 : right,
    top: topOverContent ? 0 : top,
    bottom: bottomOverContent ? 0 : bottom
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