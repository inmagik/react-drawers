import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LayoutSwitch } from '../LayoutSwitch'
import LayoutContext from '../LayoutContext'

Enzyme.configure({ adapter: new Adapter() })

describe('LayoutSwitch', () => {
  const foo = ({ open, toggle }) => <button onClick={toggle}>Toggle</button>

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LayoutSwitch bottom children={foo} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('shows toggle bottom button', () => {
    const context = {
      bottom: 10,
      toggleBottom: () => true,
    }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutSwitch bottom children={foo} />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('LayoutSwitch')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(1)
    expect(wrapper.find('button').text()).toEqual('Toggle')
  })

  it('shows toggle left button', () => {
    const context = {
      left: 10,
      toggleLeft: () => true,
    }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutSwitch left children={foo} />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('LayoutSwitch')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(1)
    expect(wrapper.find('button').text()).toEqual('Toggle')
  })

  it('shows toggle right button', () => {
    const context = {
      right: 10,
      toggleRight: () => true,
    }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutSwitch right children={foo} />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('LayoutSwitch')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(1)
    expect(wrapper.find('button').text()).toEqual('Toggle')
  })

  it('shows toggle top button', () => {
    const context = {
      top: 10,
      toggleTop: () => true,
    }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutSwitch top children={foo} />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('LayoutSwitch')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(1)
    expect(wrapper.find('button').text()).toEqual('Toggle')
  })
})
