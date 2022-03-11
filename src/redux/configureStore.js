import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countryStatsReducer from './countries/countries';
import countryDetReducer from './countries/countrydetails';

const reducer = combineReducers({ countryStatsReducer, countryDetReducer });
const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
