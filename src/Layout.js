import React from 'react'
import LayoutContext from './LayoutContext'
import { Spring, animated } from 'react-spring/renderprops'
import { LayoutLeft } from './LayoutLeft'
import { LayoutRight } from './LayoutRight'
import { LayoutTop } from './LayoutTop'
import { LayoutBottom } from './LayoutBottom'
import { LayoutSwitch } from './LayoutSwitch'
import LayoutMaster from './LayoutMaster'
import './Layout.css'

class Layout extends React.Component {
  
  static contextType = LayoutContext

  static Left = LayoutLeft
  static Right = LayoutRight
  static Top = LayoutTop
  static Bottom = LayoutBottom

  static Master = LayoutMaster

  static Switch = LayoutSwitch

  render() {
    const { children, className } = this.props
    const { rendered } = this.context
    const padding = { paddingTop: 0, paddingRight: 0, paddingLeft: 0, paddingBottom: 0 }
    React.Children.forEach(children, child => {
      if (!child || !child.type) return;
      if (child.type === LayoutTop) padding.paddingTop = this.context.top
      if (child.type === LayoutBottom) padding.paddingBottom = this.context.bottom
      if (child.type === LayoutLeft) padding.paddingLeft = this.context.left
      if (child.type === LayoutRight) padding.paddingRight = this.context.right
    })
    return (
      <LayoutContext.Provider value={{
          ...this.context, 
          top: padding.paddingTop, 
          left: padding.paddingLeft,
          right: padding.paddingRight,
          bottom: padding.paddingBottom
        }}>
        <Spring
          native
          to={padding} immediate={!rendered}
          config={{ precision: 1 }}>
          {padding => (
            <animated.div className={`w-100 min-h-100 ${className}`} style={{ ...padding}}>
              {children}
            </animated.div>
          )}
        </Spring>
      </LayoutContext.Provider>
    )
  }
}

Layout.defaultProps = {
  className: ''
}

export default Layout
