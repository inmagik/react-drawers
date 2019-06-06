import { useContext } from 'react'
import LayoutContext from './LayoutContext'

export const LayoutSwitch = ({ left, right, top, bottom, children }) => {
  const ctx = useContext(LayoutContext)
  const open = ((left && ctx.left) || (right && ctx.right) || (top && ctx.top) || (bottom && ctx.bottom)) > 0
  const toggle = (left && ctx.toggleLeft) || (right && ctx.toggleRight) || (top && ctx.toggleTop) || (bottom && ctx.toggleBottom)
  return children({ open, toggle })
}

LayoutSwitch.defaultProps = {
  left: false,
  right: false,
  top: false,
  bottom: false
}