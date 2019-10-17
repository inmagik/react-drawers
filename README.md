# react-drawers

> Collapsible docked panels for React

## Install

```sh
npm install --save react-drawers
```

## Usage

```jsx
import React, { Component } from 'react'
import Layout from 'react-drawers'

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

## Docs

### Layout.Master
This is the context component that defines the sizing and the initial state of the layout. You are expected to render this only once at the root of your application

**Available properties**

| Property          | Type   | Description                                                          |
| ----------------- | ------ | -------------------------------------------------------------------- |
| top               | int    | The height of the top drawer                                         |
| left              | int    | The width of the left drawer                                         |
| right             | int    | The width of the right drawer                                        |
| bottom            | int    | The height of the bottom drawer                                      |
| topOpenOnStart    | bool   | Whether to spawn the top drawer open or closed                       |
| leftOpenOnStart   | bool   | Whether to spawn the left drawer open or closed                      |
| rightOpenOnStart  | bool   | Whether to spawn the right drawer open or closed                     |
| bottomOpenOnStart | bool   | Whether to spawn the bottom drawer open or closed                    |
| mode              | string | The definition of how to solve the overlapping of drawers, see later |

The **mode** property is used to define how the drawers overlap when they are open simultaneously. Not all the possible overlappings are currently supported. A mode is any anagram of the word `TLBR`, where `T` stands for `Top`, `L` for `Left` and so on. The earlier the letter appears in the string, the higher the priority of the drawer. The drawer corresponding to the first letter covers all the others, the drawer correponding to the second letter is covered by the first (in case they overlap) but covers the other two, and so on. 

**Example**: `TBLR` mode has `Top` and `Bottom` spanning the entire width of the screen, and `Left` and `Right` starting from the bottom edge of `Top` and ending on the top edge of `Bottom`

**Example**: `LTBR` mode has `Left` spanning the entire height of the screen, `Top` and `Bottom` starting from the right edge of `Left` and ending on the right edge of the screen, and `Right` spanning the height between `Top` and `Bottom`

### Layout
This is the component that wraps a single page where you want to enable drawers. It is required that any content of your page is a child of the `Layout` component, and that drawers (like `Layout.Top` or `Layout.Left`) are ***direct*** children of the `Layout` component (beware of `React.Fragment`)

**Available properties**

| Property          | Type   | Description                                                          |
| ----------------- | ------ | -------------------------------------------------------------------- |
| className         | string | The classname to apply to the content container                      |
| absolute          | bool   | If true, use absolute positioning (by default, it uses fixed)        |

### Layout.Left
This is the component that represents the `Left` drawer. Any child of this component will be rendered in the `Left` drawer. Insert it in a `Layout` component where you need to enable the `Left` drawer.

**Available properties**

| Property          | Type   | Description                                                          |
| ----------------- | ------ | -------------------------------------------------------------------- |
| className         | string | The classname to apply to the content container                      |

### Layout.Top
This is the component that represents the `Top` drawer. Any child of this component will be rendered in the `Top` drawer. Insert it in a `Layout` component where you need to enable the `Top` drawer.

**Available properties**

| Property          | Type   | Description                                                          |
| ----------------- | ------ | -------------------------------------------------------------------- |
| className         | string | The classname to apply to the content container                      |

### Layout.Right
This is the component that represents the `Right` drawer. Any child of this component will be rendered in the `Right` drawer. Insert it in a `Layout` component where you need to enable the `Right` drawer.

**Available properties**

| Property          | Type   | Description                                                          |
| ----------------- | ------ | -------------------------------------------------------------------- |
| className         | string | The classname to apply to the content container                      |

### Layout.Bottom
This is the component that represents the `Bottom` drawer. Any child of this component will be rendered in the `Bottom` drawer. Insert it in a `Layout` component where you need to enable the `Bottom` drawer.

**Available properties**

| Property          | Type   | Description                                                          |
| ----------------- | ------ | -------------------------------------------------------------------- |
| className         | string | The classname to apply to the content container                      |

### Layout.Content
The drawer layout is designed to allow the normal vertical scrolling of the page in case the content does not fit the screen. In other words the height of the body usually depends on its content, and setting it to match the height of the viewport can become cumbersome. For this reason the library provides the `Layout.Content` component, which is granted to fill the area left free by drawers and to animate according to the open and close transitions of the drawers

**Available properties**

| Property          | Type   | Description                                                          |
| ----------------- | ------ | -------------------------------------------------------------------- |
| className         | string | The classname to apply to the content container                      |

### Layout.Switch
This component is a utility to build buttons that make the drawer collapse or expand. It takes a function as a child, which is given an object with two properties: the state (called `open`) of the controlled drawer (`true` means open drawer), and the `toggle` function used to toggle the state of the drawer. It is safe to put a switch inside a drawer. It is not advisable to put the only switch for a drawer inside the very same drawer (because, when the drawer is collapsed, there are no ways to expand the drawer again with that very same switch).

**Available properties**

| Property          | Type   | Description                                                               |
| ----------------- | ------ | ------------------------------------------------------------------------- |
| left              | bool   | `true` if this button should control the left drawer, `false` otherwise   |
| right             | bool   | `true` if this button should control the right drawer, `false` otherwise  |
| top               | bool   | `true` if this button should control the top drawer, `false` otherwise    |
| bottom            | bool   | `true` if this button should control the bottom drawer, `false` otherwise |

Only one of this properties must be set at a time. In case you try to set more than one, the one with the highest priority will be taken into account. Priority order is `left`, `right`, `top`, `bottom`. If none of these is set, the behaviour of the component is undefined.

## License

MIT © [Inmagik s.r.l.](https://github.com/inmagik)
