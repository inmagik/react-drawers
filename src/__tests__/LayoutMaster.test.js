import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LayoutMaster from '../LayoutMaster'

Enzyme.configure({ adapter: new Adapter() })

describe('LayoutMaster', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LayoutMaster />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('detects changes', () => {
    const wrapper = shallow(<LayoutMaster />)
    expect(wrapper.instance().state.topHeight).toEqual(0)
    wrapper.setProps({ top: 10 })
    expect(wrapper.instance().state.topHeight).toEqual(10)
  })

  it('opens top drawer', () => {
    const wrapper = shallow(<LayoutMaster topOpenOnStart={false} top={10} />)
    expect(wrapper.instance().state.top).toEqual(0)
    wrapper.instance().state.toggleTop()
    expect(wrapper.instance().state.top).toEqual(10)
  })

  it('collapses top drawer', () => {
    const wrapper = shallow(<LayoutMaster top={10} />)
    expect(wrapper.instance().state.top).toEqual(10)
    wrapper.instance().state.toggleTop()
    expect(wrapper.instance().state.top).toEqual(0)
  })

  it('opens left drawer', () => {
    const wrapper = shallow(<LayoutMaster leftOpenOnStart={false} left={10} />)
    expect(wrapper.instance().state.left).toEqual(0)
    wrapper.instance().state.toggleLeft()
    expect(wrapper.instance().state.left).toEqual(10)
  })

  it('collapses left drawer', () => {
    const wrapper = shallow(<LayoutMaster left={10} />)
    expect(wrapper.instance().state.left).toEqual(10)
    wrapper.instance().state.toggleLeft()
    expect(wrapper.instance().state.left).toEqual(0)
  })

  it('opens right drawer', () => {
    const wrapper = shallow(
      <LayoutMaster rightOpenOnStart={false} right={10} />
    )
    expect(wrapper.instance().state.right).toEqual(0)
    wrapper.instance().state.toggleRight()
    expect(wrapper.instance().state.right).toEqual(10)
  })

  it('collapses right drawer', () => {
    const wrapper = shallow(<LayoutMaster right={10} />)
    expect(wrapper.instance().state.right).toEqual(10)
    wrapper.instance().state.toggleRight()
    expect(wrapper.instance().state.right).toEqual(0)
  })

  it('opens bottom drawer', () => {
    const wrapper = shallow(
      <LayoutMaster bottomOpenOnStart={false} bottom={10} />
    )
    expect(wrapper.instance().state.bottom).toEqual(0)
    wrapper.instance().state.toggleBottom()
    expect(wrapper.instance().state.bottom).toEqual(10)
  })

  it('collapses bottom drawer', () => {
    const wrapper = shallow(<LayoutMaster bottom={10} />)
    expect(wrapper.instance().state.bottom).toEqual(10)
    wrapper.instance().state.toggleBottom()
    expect(wrapper.instance().state.bottom).toEqual(0)
  })
})
