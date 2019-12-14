import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LayoutBottom } from '../LayoutBottom'
import LayoutContext from '../LayoutContext'

Enzyme.configure({ adapter: new Adapter() })

describe('LayoutBottom', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LayoutBottom />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('shows bottom before left', () => {
    const context = { mode: 'TBLR', left: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutBottom className="bottom-classname" />
      </LayoutContext.Provider>
    )
    // hostNodes filters out component
    expect(wrapper.find('.bottom-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.left).toEqual(0)
  })

  it('shows left before bottom', () => {
    const context = { mode: 'TLBR', left: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutBottom className="bottom-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.bottom-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.left).toEqual(10)
  })

  it('shows bottom before right', () => {
    const context = { mode: 'TBLR', right: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutBottom className="bottom-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.bottom-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.right).toEqual(0)
  })

  it('shows right before bottom', () => {
    const context = { mode: 'TLRB', right: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutBottom className="bottom-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.bottom-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.right).toEqual(10)
  })
})
