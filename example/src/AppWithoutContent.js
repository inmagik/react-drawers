import React, { Component } from 'react'

import Layout from 'react-drawers'

export default class App extends Component {
  render() {
    return (
      <Layout.Master top={65} left={200} right={150} bottom={20} rightOpenOnStart={false} leftCollapsedWidth={30} leftOverContent>
        <Layout absolute className="flex-col">
          <Layout.Top className="red flex-row justify-content-center align-items-center">
            Top
          </Layout.Top>
          <Layout.Left className="yellow flex-row justify-content-center align-items-center">
            Left<br />
            With some longish content, just to see how it collapses
          </Layout.Left>
          <Layout.Right className="blue flex-row justify-content-center align-items-center">
            Right
            <Layout.Switch right>
              {({ toggle }) => (
                <div onClick={toggle} style={{ position: "absolute", top: 100, left: -50, right: 150, height: 100, backgroundColor: "pink", writingMode: "vertical-lr", textAlign: "center", cursor: "pointer" }}>Click me</div>
              )}
            </Layout.Switch>
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