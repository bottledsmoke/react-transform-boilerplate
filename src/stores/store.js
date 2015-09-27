import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import rootReducer from '../reducers/reducers';
// import apiMiddleware from '../middleware/api';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/reducers', () => {
      const nextRootReducer = require('../reducers/reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
