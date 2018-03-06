import { LOAD_POKEMON_INFO, ADD_POKEMON_TO_POKEDEX, REMOVE_POKEMON_TO_POKEDEX } from '../reducers/actions_type';
import store from '../../store/configureStore';


class PokemonService {

    constructor() {

    }

    getPokemonInfo(pokemon) {
        store.dispatch({
            type: LOAD_POKEMON_INFO,
            endpoint: {
                url: pokemon.url,
                method: 'get',
            },
        });
    }

    addPokemonInPokedex(id) {
        store.dispatch({
            type: ADD_POKEMON_TO_POKEDEX,
            payload: id,
        });
    }

    removePokemonFromPokedex(id) {
        store.dispatch({
            type: REMOVE_POKEMON_TO_POKEDEX,
            payload: id,
        });
    }

}

export default new PokemonService();