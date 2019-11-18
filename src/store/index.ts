import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { watchUser } from '../sagas/saga';
import { userReducer } from './user/reducers';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  user: userReducer,
});

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUser);
