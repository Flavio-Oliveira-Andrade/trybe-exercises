import { createStore, combineReducers } from 'redux';
import {listReducer} from '../reducers'

const rootReducer = combineReducers( {listReducer: listReducer})

const store = createStore(rootReducer);

export default store;

