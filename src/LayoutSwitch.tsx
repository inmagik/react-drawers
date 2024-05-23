import useBottomDrawer from "./useBottomDrawer"
import useLeftDrawer from "./useLeftDrawer"
import useRightDrawer from "./useRightDrawer"
import useTopDrawer from "./useTopDrawer"

type Props = {
  children: ({ open, toggle }: { open: boolean; toggle: () => void }) => React.ReactNode
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
}

export function LayoutSwitch({ left = false, right = false, top = false, bottom = false, children }: Props) {
  const { isOpen: isTopOpen, toggle: toggleTop } = useTopDrawer()
  const { isOpen: isBottomOpen, toggle: toggleBottom } = useBottomDrawer()
  const { isOpen: isLeftOpen, toggle: toggleLeft } = useLeftDrawer()
  const { isOpen: isRightOpen, toggle: toggleRight } = useRightDrawer()
  if (left) {
    return children({ open: isLeftOpen, toggle: toggleLeft })
  }
  if (right) {
    return children({ open: isRightOpen, toggle: toggleRight })
  }
  if (top) {
    return children({ open: isTopOpen, toggle: toggleTop })
  }
  if (bottom) {
    return children({ open: isBottomOpen, toggle: toggleBottom })
  }
}
