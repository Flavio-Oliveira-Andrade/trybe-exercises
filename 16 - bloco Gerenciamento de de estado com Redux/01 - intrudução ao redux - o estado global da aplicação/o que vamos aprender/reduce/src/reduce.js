// Arquivo index.js

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer});

export default reducerCombinado;



import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);
// ...

const myAction = { type: 'add_burger', value: 2 }

function store(state =0 , action){
  switch(action.type){
    case add_burger:
      return state + action.value;
    case remove_burge:
      return state - action.value
    default:
      return state;

  }

}

const myStore = Redux.createStore(Store);