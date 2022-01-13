import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from "redux-thunk";
import thunk from 'redux-thunk';
import countriesRuducer from './countries/countries';
import countryReducer from './countries/country';
import universitiesReducer from './universities/universities';
import weatherReducer from './weather/weather';

const reducer = combineReducers({
  countriesRuducer,
  weatherReducer,
  universitiesReducer,
  countryReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
