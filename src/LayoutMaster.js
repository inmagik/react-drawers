import React from 'react'
import LayoutContext from './LayoutContext'
import pick from 'lodash/pick'


class LayoutMaster extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      top: props.topOpenOnStart ? props.top : 0,
      bottom: props.bottomOpenOnStart ? props.bottom : 0,
      left: props.leftOpenOnStart ? props.left : 0,
      right: props.rightOpenOnStart ? props.right : 0,
      topHeight: props.top,
      bottomHeight: props.bottom,
      leftWidth: props.left,
      rightWidth: props.right,
      toggleTop: () => {
        this.setState(prevState => (
          {
            top: prevState.topHeight - prevState.top
          }
        ))
      },
      toggleBottom: () => {
        this.setState(prevState => (
          {
            bottom: prevState.bottomHeight - prevState.bottom
          }
        ))
      },
      toggleLeft: () => {
        this.setState(prevState => (
          {
            left: prevState.leftWidth - prevState.left
          }
        ))
      },
      toggleRight: () => {
        this.setState(prevState => (
          {
            right: prevState.rightWidth - prevState.right
          }
        ))
      },
      mode: this.props.mode,
      rendered: false
    }
  }
  componentDidMount() {
    this.setState({
      rendered: true
    })
  }
  componentDidUpdate(prevProps) {
    const prev = pick(prevProps, ['mode', 'top', 'left', 'bottom', 'right'])
    const curr = pick(this.props, ['mode', 'top', 'left', 'bottom', 'right'])
    let changes = false
    for (let k in prev) {
      if (prev[k] !== curr[k]) changes = true
    }
    if (changes) this.setState({
      mode: curr.mode,
      topHeight: curr.top,
      bottomHeight: curr.bottom,
      leftWidth: curr.left,
      rightWidth: curr.right
    })
  }
  render() {
    const { children } = this.props
    return (
      <LayoutContext.Provider value={this.state}>
        {children}
      </LayoutContext.Provider>
    )
  }
}

LayoutMaster.defaultProps = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  topOpenOnStart: true,
  bottomOpenOnStart: true,
  leftOpenOnStart: true,
  rightOpenOnStart: true,
  mode: 'TBLR'
}

export default LayoutMaster