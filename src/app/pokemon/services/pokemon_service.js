import { LOAD_POKEMON_INFO } from '../reducers/actions_type';
import GenericRemoteService from '../../store/generic_service';

let endpoint = 'https://pokeapi.co/api/v2/pokemon/';
let mapping = {
    getAction: LOAD_POKEMON_INFO
}

class PokemonService extends GenericRemoteService {

    constructor(endpoint, mappingActions) {
        super(endpoint, mappingActions);
    }

    loadCarsAction() {
        return super.callGenericAction(LOAD_CAR);
    }

}

export default new PokemonService(endpoint, mapping);