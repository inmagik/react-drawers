import React, { useContext } from 'react'
import LayoutContext from './LayoutContext'
import { before } from './util'
import { Spring, animated } from 'react-spring/renderprops'

export const LayoutLeft = ({ children, className }) => {
  const { top, bottom, left, mode, rendered } = useContext(LayoutContext)
  const style = {
    top: before(mode, 'L', 'T') ? 0 : top,
    bottom: before(mode, 'L', 'B') ? 0 : bottom,
    left: 0,
    width: left
  }
  return (
    <Spring
      native
      to={style} immediate={!rendered}
      config={{ precision: 1 }}>
      {style => (
        <animated.div className={`position-fixed layout-panel ${className}`} style={style}>
          {children}
        </animated.div>
      )}
    </Spring>
  )
}

LayoutLeft.defaultProps = {
  className: ''
}