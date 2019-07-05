import React, { Component } from 'react'

import Layout from 'react-drawers'

export default class App extends Component {
  render() {
    return (
      <Layout.Master top={65} left={200} right={150} bottom={20}>
        <Layout className="flex-col">
          <Layout.Top className="red flex-row justify-content-center align-items-center">
            Top
          </Layout.Top>
          <Layout.Left className="yellow flex-row justify-content-center align-items-center">
            Left<br />
            With some longish content, just to see how it collapses
          </Layout.Left>
          <Layout.Right className="blue flex-row justify-content-center align-items-center">
            Right
          </Layout.Right>
          <Layout.Bottom className="green flex-row justify-content-center align-items-center">
            Bottom
          </Layout.Bottom>
          <div className="flex-1 flex-col justify-content-center">
            <div>
              <div className="flex-row justify-content-center">
                <Layout.Switch top>
                  {({ open, toggle }) => (
                    <button onClick={toggle}>Toggle top</button>
                  )}
                </Layout.Switch>
              </div>
              <div className="flex-row justify-content-center">
                <Layout.Switch left>
                  {({ open, toggle }) => (
                    <button onClick={toggle}>Toggle left</button>
                  )}
                </Layout.Switch>
                <Layout.Switch right>
                  {({ open, toggle }) => (
                    <button onClick={toggle}>Toggle right</button>
                  )}
                </Layout.Switch>
              </div>
              <div className="flex-row justify-content-center">
                <Layout.Switch bottom>
                  {({ open, toggle }) => (
                    <button onClick={toggle}>Toggle bottom</button>
                  )}
                </Layout.Switch>
              </div>
            </div>


          </div>
        </Layout>
      </Layout.Master>
    )
  }
}
