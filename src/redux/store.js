/* eslint-disable no-undef */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { usersReducer } from './users-reducer';

const reducers = combineReducers({
  usersData: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
