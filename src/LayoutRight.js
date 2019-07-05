import React, { useContext } from 'react'
import LayoutContext from './LayoutContext'
import { before } from './util'
import { Spring, animated } from 'react-spring/renderprops'

export const LayoutRight = ({ children, className }) => {
  const { top, bottom, right, mode, rendered, rightWidth } = useContext(LayoutContext)
  const style = {
    top: before(mode, 'R', 'T') ? 0 : top,
    bottom: before(mode, 'R', 'B') ? 0 : bottom,
    right: 0,
    width: right
  }
  return (
    <Spring
      native
      to={style} immediate={!rendered}
      config={{ precision: 1 }}>
      {style => (
        <animated.div className={`position-fixed layout-panel`} style={style}>
          <div className={className} style={{ width: rightWidth, minWidth: rightWidth, height: '100%' }}>
            {children}
          </div>
        </animated.div>
      )}
    </Spring>
  )
}

LayoutRight.defaultProps = {
  className: ''
}