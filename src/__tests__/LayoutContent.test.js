import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LayoutContent } from '../LayoutContent'

Enzyme.configure({ adapter: new Adapter() })

describe('LayoutContent', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LayoutContent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
