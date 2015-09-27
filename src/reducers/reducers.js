import { combineReducers } from 'redux';
import { SAY_HELLO } from '../actions/actions';

function hello(state = {text: 'Hello World'}, action) {
  switch (action.type) {
    case SAY_HELLO:
      return {
        text: action.payload.text
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  hello
});

export default rootReducer;
