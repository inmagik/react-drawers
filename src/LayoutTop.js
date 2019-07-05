import React, { useContext } from 'react'
import LayoutContext from './LayoutContext'
import { before } from './util'
import { Spring, animated } from 'react-spring/renderprops'

export const LayoutTop = ({ children, className }) => {
  const { top, left, right, mode, rendered, topHeight } = useContext(LayoutContext)
  const style = {
    left: before(mode, 'T', 'L') ? 0 : left,
    right: before(mode, 'T', 'R') ? 0 : right,
    top: 0,
    height: top
  }
  return (
    <Spring
      native
      to={style} immediate={!rendered}
      config={{ precision: 1 }}>
      {style => (
        <animated.div className={`position-fixed layout-panel`} style={style}>
          <div className={className} style={{ height: topHeight, minHeight: topHeight, width: '100%' }}>
            {children}
          </div>
        </animated.div>
      )}
    </Spring>
  )
}

LayoutTop.defaultProps = {
  className: ''
}