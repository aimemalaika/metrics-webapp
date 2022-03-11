import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countryStatsReducer from './countries/countries';

const reducer = combineReducers({ countryStatsReducer });
const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
