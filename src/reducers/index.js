import { combineReducers } from 'redux';

import termReducer from './termReducer';

import itemReducer from './itemReducer';

const rootReducer = combineReducers({
  term: termReducer,
  items: itemReducer
});

export default rootReducer;
