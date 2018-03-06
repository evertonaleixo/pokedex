import {
    ADD_POKEMON_TO_POKEDEX,
    REMOVE_POKEMON_TO_POKEDEX,
    LOAD_POKEMON_INFO_SUCCESS,
    LOAD_ALL_POKEMON_SUCCESS
} from './actions_type'

export default (state = { pokemons: [{ 'id': 1, 'name': 'Bulbasaur' }, { 'id': 2, 'name': 'Ivysaur' }], pokedex: [1], pokemon: {} }, action) => {

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
            console.log(action);
            let all = action.payload.results.map(res => {
                let id = parseInt(res.url.substring(res.url.lastIndexOf('pokemon/') + 8, res.url.length - 1));
                return {
                    name: res.name.replace("-", " "),
                    url: res.url,
                    id,
                };
            });
            return Object.assign({}, state, { pokemons: all });
        case LOAD_POKEMON_INFO_SUCCESS:
            // state.cars_dealership.push(action.payload);

            return Object.assign({}, state, {});
        default:
            return state
    }
}