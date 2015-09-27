React Transform Boilerplate
=====================

A fork of Dan Abramov's [React Transform Boilerplate](https://github.com/gaearon/react-transform-boilerplate) with the following functionality:

### Original Boilerplate:
* hot reloading React components;
* error handling inside component `render()` function;
* error handling for syntax errors (thanks, **[@glenjamin](https://github.com/glenjamin)**!)

### PostCSS
* [PostCSS](https://github.com/postcss/postcss) compilation including
  * [SimpleVars](https://github.com/postcss/postcss-simple-vars) - Automatically injects variables. Comes pre-packed with FlatUI color palette.
  * [AutoPrefixer](https://github.com/postcss/autoprefixer)
  * [Lost](https://github.com/corysimmons/lost) - a PostCSS grid system

### Testing + Linting
* [Karma](http://karma-runner.github.io/0.13/index.html) unit tests backed by [Mocha](https://mochajs.org/) that are run automatically via [Karma-Webpack](https://github.com/webpack/karma-webpack).
* [esLint](http://eslint.org/) configured with [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react).

### Redux + Routing
* [Redux](https://github.com/rackt/redux) + [React-Redux](https://github.com/rackt/react-redux) (with the following middleware)
  * [Redux-Logger](https://github.com/fcomb/redux-logger)
  * [Redux-Thunk](https://github.com/gaearon/redux-thunk) (for async api calls)
* [Redux DevTools](https://github.com/gaearon/redux-devtools)
* [React Router](https://github.com/rackt/react-router)


Built with **[babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)** and a few custom transforms.
**[Does not](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4)** use React Hot Loader.


## Installation

For a fresh install...

```
git clone https://github.com/bottledsmoke/react-transform-boilerplate.git
cd react-transform-boilerplate
rm -rf .git   # Deletes the git repo (do not do this if you are making a pull request)
git init      # Creates a fresh repo (do not do this if you are making a pull request)
npm install
npm start
open http://localhost:3000
```

From there, edit the package.json and replace my info with yours, and your app is good to go!

Thanks again to Dan and the rest of the Redux + Rackt fellowship for the wonderful boilerplate.


# Original Documentation

## What’s Inside


The component instrumentation is implemented on top of **[babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)**:

* **[react-transform-hmr](https://github.com/gaearon/react-transform-hmr)** handles hot reloading
* **[react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors)** catches component errors

The syntax errors are displayed in an overlay by **[@glenjamin](https://github.com/glenjamin)**’s **[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)** which replaces Webpack Dev Server.

## Troubleshooting

### I can’t serve images / use different HTML file / etc

This boilerplate is just a Webpack bundle served by an Express server. It’s not meant to demonstrate every feature of either project. Please consult Webpack and Express docs to learn how to serve images, or bundle them into your JavaScript application.

### I don’t see the syntax error overlay!

Make sure your react-app is not attached to `document.body` as the client overlay provided by [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) will render into `document.body`.
Attaching the React root node to `document.body` requires extra caution, as many third-party packages will append their markup to the body as well. React will replace the entire contents in the body on every re-render. Thus you will not see the additional markup.

It’s always better to render your React app in a `#root` DOM element.

```js
import React from 'react'
import { App } from 'app'

React.render(<App />, document.getElementById('root'))
```

## Discussion

You can discuss React Transform and related projects in **#react-transform** channel on [Reactiflux Slack](http://reactiflux.com).

## License

CC0 (public domain)
