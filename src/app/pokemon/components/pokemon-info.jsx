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

    return (
      <div>
        PokemonInfo info
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