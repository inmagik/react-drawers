# react-drawers

> Collapsible docked panels for React

[![NPM](https://img.shields.io/npm/v/react-drawers.svg)](https://www.npmjs.com/package/react-drawers) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-drawers
```

## Usage

```jsx
import React, { Component } from 'react'
import Layout from '@inmagik/react-drawers'

class MyComponent extends Component {
  render() {
    return (
      <Layout className="classname-applied-to-content">
        <Layout.Top className="top-classname">
          Top
        </Layout.Top>
        <Layout.Left className="left-classname">
          Left
        </Layout.Left>
        <Layout.Right className="right-classname">
          Right
        </Layout.Right>
        <Layout.Bottom className="bottom-classname">
          Bottom
        </Layout.Bottom>
        {/* 
          The following is custom content, and will be displayed as the content of the page
          In this example, I put some button arranged in a flower-like shape
          Each button controls the collapsing of one of the drawers
        */}
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
    )
  }
}

class App extends Component {

  render() {
    return (
      <Layout.Master top={65} left={200} right={150} bottom={20}>
        <MyComponent />
      </Layout.Master>
    )
  }

}

```

## License

MIT © [osioalberto@gmail.com](https://github.com/osioalberto@gmail.com)
