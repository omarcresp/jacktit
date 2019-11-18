import { combineReducers, createStore } from 'redux';
import { userReducer } from './user/reducers';

const reducers = combineReducers({
  user: userReducer,
});

const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

export const store = createStore(reducers, reduxDevTools && reduxDevTools());
