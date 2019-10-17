import React from 'react'
import LayoutContext from './LayoutContext'
import { LayoutLeft } from './LayoutLeft'
import { LayoutRight } from './LayoutRight'
import { LayoutTop } from './LayoutTop'
import { LayoutBottom } from './LayoutBottom'
import { LayoutSwitch } from './LayoutSwitch'
import LayoutMaster from './LayoutMaster'
import './base.css'
import styles from './Layout.module.css'
import { LayoutContent } from './LayoutContent'

class Layout extends React.Component {

  static contextType = LayoutContext

  static Left = LayoutLeft
  static Right = LayoutRight
  static Top = LayoutTop
  static Bottom = LayoutBottom

  static Master = LayoutMaster

  static Switch = LayoutSwitch

  static Content = LayoutContent

  render() {
    const { children, className, absolute } = this.props
    const padding = { paddingTop: 0, paddingRight: 0, paddingLeft: 0, paddingBottom: 0 }
    const classNames = [styles.layout_root, className]
    if (absolute) {
      classNames.push(styles.layout_absolute)
    }
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
        <div className={classNames.join(' ')} style={{ ...padding }}>
          {children}
        </div>
      </LayoutContext.Provider>
    )
  }
}

Layout.defaultProps = {
  className: ''
}

export default Layout
