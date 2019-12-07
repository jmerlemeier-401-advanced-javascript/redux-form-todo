import { createStore, combineReducers } from 'redux';

import "./todo.scss";

import todoReducer from './todo-reducer';

let reducers = combineReducers({
  todo: todoReducer,
});

export default () => createStore(reducers);