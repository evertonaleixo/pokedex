import {
    ADD_POKEMON_TO_POKEDEX,
    REMOVE_POKEMON_TO_POKEDEX,
    LOAD_POKEMON_INFO_SUCCESS,
    LOAD_ALL_POKEMON_SUCCESS
} from './actions_type'

export default (state = { pokemons: [{ 'id': 1, 'name': 'Bulbasaur' }, { 'id': 2, 'name': 'Ivysaur' }], pokedex: [1], pokemon: {} }, action) => {

    switch (action.type) {
        case ADD_POKEMON_TO_POKEDEX:
            state.pokedex.push(action.payload);

            return {...state };
        case REMOVE_POKEMON_TO_POKEDEX:
            let idx = state.pokedex.findIndex(x => x == action.payload);

            delete state.pokedex[idx];

            return {...state };
        case LOAD_ALL_POKEMON_SUCCESS:

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
            let res = action.payload;
            let imgSrc = "/assets/img/pokemons/" + res.name.toLowerCase().replace(" ", "-") + ".png";

            let pokemon = {
                attributes: {
                    speed: res.stats.filter(x => x.stat.name == "speed").base_stat,
                    special_defense: res.stats.filter(x => x.stat.name == "special-defense").base_stat,
                    special_attack: res.stats.filter(x => x.stat.name == "special-attack").base_stat,
                    defense: res.stats.filter(x => x.stat.name == "defense").base_stat,
                    attack: res.stats.filter(x => x.stat.name == "attack").base_stat,
                    hp: res.stats.filter(x => x.stat.name == "hp").base_stat
                },
                height: res.height,
                weight: res.weight,
                abilities: res.abilities.map(h => {
                    return h.ability.name
                }),
                image: imgSrc,
                name: res.name
            };
            console.log(pokemon);
            return Object.assign({}, state, { pokemon });
        default:
            return state
    }
}