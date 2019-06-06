import React from 'react'
import LayoutContext from './LayoutContext'
import { Spring } from 'react-spring/renderprops'
import { LayoutLeft } from './LayoutLeft'
import { LayoutRight } from './LayoutRight'
import { LayoutTop } from './LayoutTop'
import { LayoutBottom } from './LayoutBottom'
import pick from 'lodash/pick'
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
    return (
      <Spring
        to={pick(this.context, ['top', 'bottom', 'left', 'right'])} immediate={!rendered}
        config={{ precision: 1 }}>
        {({ top, bottom, left, right }) => (
          <div className={`w-100 min-h-100 ${className}`} style={{ paddingTop: top, paddingBottom: bottom, paddingLeft: left, paddingRight: right }}>
            {children}
          </div>
        )}
      </Spring>
    )
  }
}

Layout.defaultProps = {
  className: ''
}

export default Layout
