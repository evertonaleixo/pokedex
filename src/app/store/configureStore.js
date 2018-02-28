import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogicMiddleware } from 'redux-logic';
import arrLogic from './logics'
import { routerReducer } from 'react-router-redux'
import { config } from '../config/config'

const home_counter = require("../home/reducers/home_counter_reducer").default;
const pokemon_reducer = require("../pokemon/reducers/pokemon_reducer").default;

export const rootReducer = combineReducers({
    routing: routerReducer,
    home_counter,
    pokemon_reducer
});

const logicMiddleware = createLogicMiddleware(arrLogic, {});

const store = createStore(rootReducer,
    applyMiddleware(
        logicMiddleware
    )
);

export default store;