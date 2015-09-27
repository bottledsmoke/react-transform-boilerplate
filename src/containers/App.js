import React, { Component } from 'react';
import { connect } from 'react-redux';
// import HelloWorld from "../components/helloWorld";


class App extends Component {
  render() {
    const { hello } = this.props;
    return (
      <h1>{hello.text}</h1>
    );
  }
}

function stateToProps(state) {
  return {
    hello: state.hello
  };
}

export default connect(stateToProps)(App);
