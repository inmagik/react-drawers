import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import LayoutContext from './LayoutContext'
import { before } from './util'
import styles from "./Layout.module.css"

export const LayoutBottom = ({ children, className }) => {
  const { bottom, left, right, mode, bottomHeight } = useContext(LayoutContext)
  const style = {
    left: before(mode, 'B', 'L') ? 0 : left,
    right: before(mode, 'B', 'R') ? 0 : right,
    bottom: 0,
    transform: `translate3d(0, ${bottomHeight - bottom}px, 0)`
  }
  return (
    <div className={`${styles.position_fixed} ${styles.layout_panel}`} style={style}>
      <div className={className} style={{ height: bottomHeight, minHeight: bottomHeight, width: '100%' }}>
        {children}
      </div>
    </div>
  )
}

LayoutBottom.defaultProps = {
  className: ''
}

LayoutBottom.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
