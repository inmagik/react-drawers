import React, { useContext } from "react"
import LayoutContext from "./LayoutContext"
import { LayoutLeft } from "./LayoutLeft"
import { LayoutRight } from "./LayoutRight"
import { LayoutTop } from "./LayoutTop"
import { LayoutBottom } from "./LayoutBottom"
import { LayoutSwitch } from "./LayoutSwitch"
import { LayoutMaster } from "./LayoutMaster"
import "./base.css"
import styles from "./Layout.module.css"
import { LayoutContent } from "./LayoutContent"

type Props = {
  children?: React.ReactNode
  className?: string
  absolute?: boolean
}

function Layout({ children, className = "", absolute = false }: Props) {
  const drawers = {
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 0,
  }
  const padding = {
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 0,
  }
  const classNames = [styles.layout_root, className]
  const context = useContext(LayoutContext)
  const {
    top: ctxTop,
    left: ctxLeft,
    right: ctxRight,
    bottom: ctxBottom,
    topOverContent,
    leftOverContent,
    rightOverContent,
    bottomOverContent,
  } = context

  if (absolute) {
    classNames.push(styles.layout_absolute)
  }
  React.Children.forEach(children, (child) => {
    if (child && typeof child === "object" && "type" in child) {
      if (child.type === LayoutTop) {
        drawers.paddingTop = ctxTop
        if (!topOverContent) {
          padding.paddingTop = ctxTop
        }
      }
      if (child.type === LayoutBottom) {
        drawers.paddingBottom = ctxBottom
        if (!bottomOverContent) {
          padding.paddingBottom = ctxBottom
        }
      }
      if (child.type === LayoutLeft) {
        drawers.paddingLeft = ctxLeft
        if (!leftOverContent) {
          padding.paddingLeft = ctxLeft
        }
      }
      if (child.type === LayoutRight) {
        drawers.paddingRight = ctxRight
        if (!rightOverContent) {
          padding.paddingRight = ctxRight
        }
      }
    }
  })
  return (
    <LayoutContext.Provider
      value={{
        ...context,
        top: drawers.paddingTop,
        left: drawers.paddingLeft,
        right: drawers.paddingRight,
        bottom: drawers.paddingBottom,
      }}
    >
      <div className={classNames.join(" ")} style={{ ...padding }}>
        {children}
      </div>
    </LayoutContext.Provider>
  )
}

Layout.Master = LayoutMaster
Layout.Content = LayoutContent
Layout.Top = LayoutTop
Layout.Bottom = LayoutBottom
Layout.Left = LayoutLeft
Layout.Right = LayoutRight
Layout.Switch = LayoutSwitch

export default Layout
