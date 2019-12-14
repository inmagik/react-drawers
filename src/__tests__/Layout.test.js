import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Layout from '../Layout'

Enzyme.configure({ adapter: new Adapter() })

describe('Layout', () => {
  const className = 'classname-applied-to-content'

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Layout />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('shows layouts', () => {
    const wrapper = shallow(
      <Layout className={className}>
        <Layout.Top>Top</Layout.Top>
        <Layout.Right>Right</Layout.Right>
        <Layout.Bottom>Bottom</Layout.Bottom>
        <Layout.Left>Left</Layout.Left>
      </Layout>
    )

    expect(
      wrapper.find('.classname-applied-to-content').hasClass('layout_root')
    ).toEqual(true)
    expect(
      wrapper.find('.classname-applied-to-content').hasClass('layout_absolute')
    ).toEqual(false)
    expect(wrapper.find(Layout.Top)).toHaveLength(1)
    expect(wrapper.find(Layout.Right)).toHaveLength(1)
    expect(wrapper.find(Layout.Bottom)).toHaveLength(1)
    expect(wrapper.find(Layout.Left)).toHaveLength(1)
  })

  it('shows absolute layout', () => {
    const wrapper = shallow(<Layout absolute className={className}></Layout>)

    expect(wrapper.find('.classname-applied-to-content')).toHaveLength(1)
    expect(
      wrapper.find('.classname-applied-to-content').hasClass('layout_root')
    ).toEqual(true)
    expect(
      wrapper.find('.classname-applied-to-content').hasClass('layout_absolute')
    ).toEqual(true)
  })

  it('handles undefined child', () => {
    const child = [undefined]
    const wrapper = shallow(<Layout className={className}>{child}</Layout>)
    expect(wrapper.find('.classname-applied-to-content')).toHaveLength(1)
  })
})
