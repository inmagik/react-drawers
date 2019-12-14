import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LayoutLeft } from '../LayoutLeft'
import LayoutContext from '../LayoutContext'

Enzyme.configure({ adapter: new Adapter() })

describe('LayoutLeft', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LayoutLeft />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('shows left before top', () => {
    const context = { mode: 'BLRT', top: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutLeft className="left-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.left-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.top).toEqual(0)
  })

  it('shows top before left', () => {
    const context = { mode: 'TLBR', top: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutLeft className="left-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.left-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.top).toEqual(10)
  })

  it('shows left before bottom', () => {
    const context = { mode: 'TLBR', bottom: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutLeft className="left-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.left-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.bottom).toEqual(0)
  })

  it('shows bottom before left', () => {
    const context = { mode: 'RBLT', bottom: 10 }
    const wrapper = mount(
      <LayoutContext.Provider value={context}>
        <LayoutLeft className="left-classname" />
      </LayoutContext.Provider>
    )
    expect(wrapper.find('.left-classname').hostNodes()).toHaveLength(1)
    expect(wrapper.find('div').getElements()[0].props.style.bottom).toEqual(10)
  })
})
