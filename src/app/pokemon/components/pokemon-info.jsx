import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

class PokemonInfo extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  render() {
    let pokemon = this.props.pokemon;
    return (
      <div>
        <h1> {pokemon.name} </h1>
        <img src={pokemon.img}/>

        <h4> Height: { pokemon.height } </h4>
        <h4> Weight: { pokemon.weight } </h4>
        <h3> Attributes </h3>
        
        <h4>attack: { pokemon.attribute && pokemon.attribute.attack} </h4>
        <h4>defense: { pokemon.attribute && pokemon.attribute.defense} </h4>
        <h4>special_attack: { pokemon.attribute && pokemon.attribute.special_attack} </h4>
        <h4>special_defense: { pokemon.attribute && pokemon.attribute.special_defense} </h4>
        <h4>speed: { pokemon.attribute && pokemon.attribute.speed} </h4>
        <h4>hp: { pokemon.attribute && pokemon.attribute.hp} </h4>
        
        <h3> Abilities </h3> 
        {pokemon.abilities && pokemon.abilities.map((hability) => {return <h4> {hability} </h4> } )}
      </div> 
    );
  }

}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon_reducer.pokemon
  }
}

export default connect(mapStateToProps)(PokemonInfo);