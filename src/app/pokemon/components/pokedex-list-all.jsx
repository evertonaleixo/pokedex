import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

import Reactable from 'reactable';

import PokemonAction from '../services/pokemon_service';

class PokedexListAll extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  handlePokedex(id, hasInMyPokedex) {
    if (hasInMyPokedex) {
      console.log('removing')
      PokemonAction.removePokemonFromPokedex(id);
    } else {
      console.log('adding')      
      PokemonAction.addPokemonInPokedex(id);
    }
    console.log(hasInMyPokedex);
    this.setState({});
  }

  showPokemon(pokemon){
    console.log(pokemon);
    PokemonAction.getPokemonInfo(pokemon);
  }

  render() {
    var Table = Reactable.Table;
    var Tr = Reactable.Tr;
    var Td = Reactable.Td;

    let allPokemons = this.props.pokemons;
    let myPokemonsId = this.props.myPokemons;
    return (
     <Table className="table" id="table" 
             filterable={['id', 'name']}  
             itemsPerPage={20} pageButtonLimit={5}>
        {allPokemons.map((pokemon) => {

          let hasInMyPokedex = myPokemonsId.includes(pokemon.id);

          let addBtn = hasInMyPokedex ? 'btn btn-primary fa fa-plus-circle' : 'btn btn-primary fa fa-minus-circle'
          let imgSrc = "/assets/img/pokemons/"+pokemon.name.toLowerCase().replace(" ", "-")+".png";
          
          return <Tr key={pokemon.id}>
            <Td className="vcenter" column="id" data={pokemon.id} />
            <Td className="vcenter capitalize" column="name" data={pokemon.name} />
            <Td className="vcenter" column="icon">
              <img src={imgSrc} width={'50px'}/>
            </Td>
            <Td className="vcenter" column="In pokedex?"> 
              <button className={addBtn} onClick={()=>{ this.handlePokedex(pokemon.id, hasInMyPokedex); }}></button>
            </Td>
            <Td className="vcenter" column="details"> 
              <button className="btn btn-primary fa fa-eye" onClick={() => { this.showPokemon(pokemon); }}></button>
            </Td>
          </Tr>
        })}
      </Table>
    );
  }

}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemon_reducer.pokemons,
    myPokemons: state.pokemon_reducer.pokedex,
  }
}

export default connect(mapStateToProps)(PokedexListAll);