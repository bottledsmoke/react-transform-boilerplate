import React from 'react/addons';
import expect from 'expect';
import { Provider } from 'react-redux';
import configureStore from '../../stores/store';
import App from '../App';

const TestUtils = React.addons.TestUtils;

describe('App', function () {
  it('Says Hello!', function () {
    const hello = TestUtils.renderIntoDocument(
      <Provider store={configureStore()}>
        {() => <App/>}
      </Provider>);
    const rendered = TestUtils.findRenderedDOMComponentWithTag(
      hello, 'h1'
      );
    expect(rendered.getDOMNode().textContent).toEqual('Hello World');
  });
});
