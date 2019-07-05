import React, { useContext } from 'react'
import LayoutContext from './LayoutContext'
import { before } from './util'
import { Spring, animated } from 'react-spring/renderprops'

export const LayoutBottom = ({ children, className }) => {
  const { bottom, left, right, mode, rendered, bottomHeight } = useContext(LayoutContext)
  const style = {
    left: before(mode, 'B', 'L') ? 0 : left,
    right: before(mode, 'B', 'R') ? 0 : right,
    bottom: 0,
    height: bottom
  }
  return (
    <Spring
      native
      to={style} immediate={!rendered}
      config={{ precision: 1 }}>
      {style => (
        <animated.div className={`position-fixed layout-panel`} style={style}>
          <div className={className} style={{ height: bottomHeight, minHeight: bottomHeight, width: '100%' }}>
            {children}
          </div>
        </animated.div>
      )}
    </Spring>
  )
}

LayoutBottom.defaultProps = {
  className: ''
}