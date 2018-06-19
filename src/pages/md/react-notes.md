---
title: "React Notes"
date: "2018-06-11"
---

> [Lynda Learning from LinkedIn](https://prp1277.github.io/md/react-notes.md#Lynda)</br>
> [W3adda Components](https://prp1277.github.io/md/react-notes.md#w3adda-react-tutorial)

# Lynda

_State and props_ - how you define things in react.

One way data flow - all downhill - from parent to children
* _lifting up state_ will be used later to pass upstream

Synthetic events - help to standardize things between browsers.

## Elements and Components

Components are React's building blocks

* They should be reusable
* They are composed of elements
* Figure out what components and data you need before starting anything

Components are either js functions or classes

Separation of concerns - lots of people on lots of moving parts - make them independent and reusable so they can be used by everyone.

### React.createElement

 `document.getElementByID ( 'react-root' )` placed in HTML file
* props to pass into that element
* set class for all attributes as specified in the DOM
* whatever needs to be in the element - text in this instance

Breaking things up into components makes it easier to reuse them. Think about writing a long macro - if you break it into separate modules it makes it a lot easier to tackle.

* Container
* Images
* Selectors
* Anything else

### Functions and Classes

Functions are easier to work with when you're starting out
They always use the (props) argument.

```js
FN ____(props){
    return React.createElement() {type, alt}
```

Create elements for each component using tags - ie < div>

### jsx and es6

Need to use a local webserver - [MAMP](https://www.mamp.info/en/) is a good starter for this. This looks like it'd be in place of gatsby or possibly even vscode?

Create crossorigin script file and line in index.HTML
`script src="app.js" type="text/babel`
jsx elements look like inline html - refactor elements accordingly.
Wrap everything in parentheses for separation.

### Create Component with Array Data

Source can be external api or another data source / database. This is a hard-coded version that is a little different than how it would usually work. Goal of this exercise is to show how you don't have to hard-code things with react.

#### allSizes:

```js
function SizeSelector(props){
     return (
         <div className="field-group"
         label htmlFor="size-options" Size >
     );
 };

```

Use helper functions that use { x } as a flexible return element - don't forget to add a key!

`<option value={ num } key={ num } > { num }`

Passing props to children - props that will be passed along will need to be in brackets.

* _defaultValue_ expression is going to be the output.
  Need to turn the whole thing into an expression using curly brackets
  * ES6 allows you to use `../../../assets${props.color}`

#### Using States

States allow you to dynamically adjust the output using a _getInitialState_ and _render..return_ functions.

```js
var ProductCustomizer = createReactClass({
    getInitialState: function() {
        var sizes = window.Inventory.allSizes;

        return {
            color: "red",
            size: 8,
            sizes: sizes
        };
    },

  render: function () {
    return (
        <div className="customizer">
          <div className="product-image">
            <ProductImage color={this.state.color} />
          </div>
          <div className="selectors">
            <SizeSelector size={this.state.size}/>
          </div>
        </div>
    );
  }
})
```

Since the size selector and the color selectors are so similar you can keep most of the structure and just change some of the labeling. Add it to the initial state and the render function, again, most of the time it's easy enough to copy and paste the line from earlier and make adjustments.
____

# [W3adda React Tutorial](W3adda.com/react-js-tutorial/reactjs-components)

## Component Types

### Functional - Stateless - simplest form

* Receives a single object `<div>` of props as function and returns DOM Element in HTML-like syntax (JSX)

```js
function Name(props){
  return <h1>Name, {props.name} !</h1>;
}
  ```

### Class Components

* Receive props the same way, but add private input (state) to track the internal state
* These are the components that extend React.Component and use render / return methods
* Create a Javascript class that extends from React.Component class and define a render() method

```js
 ReactDOM.render(<element name=""/>, document.getElementById('div-ID'));
 ```

The DOM Element must be available in the src/index.html file