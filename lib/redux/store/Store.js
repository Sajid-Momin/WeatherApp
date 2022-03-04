import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { weatherReducer } from '../reducers/WeatherReducer';


const rootReducer = combineReducers({weatherReducer});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;


