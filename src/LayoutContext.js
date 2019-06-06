import React from 'react'

const LayoutContext = React.createContext({
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  topHeight: 0,
  bottomHeight: 0,
  leftWidth: 0,
  rightWidth: 0,
  toggleTop: () => { },
  toggleBottom: () => { },
  toggleLeft: () => { },
  toggleRight: () => { },
  mode: 'TBLR'
})

export default LayoutContext