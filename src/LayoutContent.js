import React, { useContext } from 'react'
import LayoutContext from './LayoutContext'
import { Spring, animated } from 'react-spring/renderprops'

export const LayoutContent = ({ children, className }) => {
  const { top, left, right, bottom, rendered } = useContext(LayoutContext)
  const style = {
    left: left,
    right: right,
    top: top,
    bottom: bottom
  }
  return (
    <Spring
      native
      to={style} immediate={!rendered}
      config={{ precision: 1 }}>
      {style => (
        <animated.div className={`position-fixed`} style={style}>
          <div className={className} style={{ height: '100%', width: '100%' }}>
            {children}
          </div>
        </animated.div>
      )}
    </Spring>
  )
}

LayoutContent.defaultProps = {
  className: ''
}