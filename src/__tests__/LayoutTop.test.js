import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LayoutTop } from '../LayoutTop'
import LayoutContext from '../LayoutContext'

Enzyme.configure({ adapter: new Adapter() })

describe('LayoutTop', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LayoutTop />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('shows top before left', () => {
    const context = { mode: 'TBLR', left: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutTop className="top-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.top-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.left).toEqual(0)
  })

  it('shows left before top', () => {
    const context = { mode: 'LTBR', left: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutTop className="top-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.top-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.left).toEqual(10)
  })

  it('shows top before right', () => {
    const context = { mode: 'TBLR', right: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutTop className="top-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.top-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.right).toEqual(0)
  })

  it('shows right before top', () => {
    const context = { mode: 'LRBT', right: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutTop className="top-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.top-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.right).toEqual(10)
  })
})
