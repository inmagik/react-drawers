import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LayoutRight } from '../LayoutRight'
import LayoutContext from '../LayoutContext'

Enzyme.configure({ adapter: new Adapter() })

describe('LayoutRight', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LayoutRight />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('shows right before top', () => {
    const context = { mode: 'BLRT', top: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutRight className="right-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.right-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.top).toEqual(0)
  })

  it('shows top before right', () => {
    const context = { mode: 'TLBR', top: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutRight className="right-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.right-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.top).toEqual(10)
  })

  it('shows right before bottom', () => {
    const context = { mode: 'TLRB', bottom: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutRight className="right-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.right-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.bottom).toEqual(0)
  })

  it('shows bottom before right', () => {
    const context = { mode: 'BRLT', bottom: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutRight className="right-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.right-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.bottom).toEqual(10)
  })
})
