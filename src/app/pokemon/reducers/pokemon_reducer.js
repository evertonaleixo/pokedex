import {
    ADD_POKEMON_TO_POKEDEX,
    REMOVE_POKEMON_TO_POKEDEX,
    LOAD_POKEMON_INFO_SUCCESS,
    LOAD_ALL_POKEMON_SUCCESS
} from './actions_type'

export default (state = { pokemons: [{}], pokedex: [], pokemon: {} }, action) => {

    switch (action.type) {
        case ADD_POKEMON_TO_POKEDEX:
            // let buyedCar = state.cars_dealership[action.payload];
            // delete state.cars_dealership[action.payload];

            // state.cars_garage.push(buyedCar);

            return Object.assign({}, state, {});
        case REMOVE_POKEMON_TO_POKEDEX:
            // delete state.cars_garage[action.payload];

            return Object.assign({}, state, {});
        case LOAD_ALL_POKEMON_SUCCESS:
            // state.cars_dealership.push(action.payload);

            return Object.assign({}, state, {});
        case LOAD_POKEMON_INFO_SUCCESS:
            // state.cars_dealership.push(action.payload);

            return Object.assign({}, state, {});
        default:
            return state
    }
}