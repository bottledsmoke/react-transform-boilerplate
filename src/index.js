import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from '../node_modules/react-router/node_modules/history/lib/createBrowserHistory';
import store from './stores/store';

React.render((
  <Provider store={store}>
    {() =>
      <Router history={createBrowserHistory()}>
        <Route path='/' component={App}/>
      </Router>
    }
  </Provider>
  ), document.getElementById('root')
);
