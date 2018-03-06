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
        <div style={{ minHeight: '45vh', float: 'left', width: '100%', backgroundColor: 'black', margin: '45px', marginTop: '70px', textAlign: 'center' }}>
          <img src={pokemon.image} width={"400px"}/>
        </div>
        <div>
          <h1> Nome: {pokemon.name} </h1>
          

          <h4> Height: { pokemon.height } </h4>
          <h4> Weight: { pokemon.weight } </h4>
          <h3> Attributes </h3>
          
          <h4>Attack: { pokemon.attributes && pokemon.attributes.attack} </h4>
          <h4>Defense: { pokemon.attributes && pokemon.attributes.defense} </h4>
          <h4>Special attack: { pokemon.attributes && pokemon.attributes.special_attack} </h4>
          <h4>Special defense: { pokemon.attributes && pokemon.attributes.special_defense} </h4>
          <h4>Speed: { pokemon.attributes && pokemon.attributes.speed} </h4>
          <h4>HP: { pokemon.attributes && pokemon.attributes.hp} </h4>
          
          <h3> Abilities </h3> 
          {pokemon.abilities && pokemon.abilities.map((hability, idx) => {return <h4 key={idx}> {hability} </h4> } )}
        </div>
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