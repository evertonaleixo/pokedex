import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

import Reactable from 'reactable';


class PokedexListMy extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  render() {
    var Table = Reactable.Table;
    var Tr = Reactable.Tr;
    var Td = Reactable.Td;

    let myPokemons = this.props.pokemons.filter( pokemon => this.props.myPokemons.includes(pokemon.id) );

    return (
     <Table className="table" id="table" 
             filterable={['id', 'name']} 
             itemsPerPage={20} pageButtonLimit={5}>
        {myPokemons.map((pokemon) => {

          let imgSrc = "/assets/img/pokemons/"+pokemon.name.toLowerCase().replace(" ", "-")+".png";

          return <Tr key={pokemon.id}>
            <Td className="vcenter" column="id" data={pokemon.id} />
            <Td className="vcenter capitalize" column="name" data={pokemon.name} />
            <Td className="vcenter" column="icon">
              <img src={imgSrc} width={'50px'}/>
            </Td>
            
            <Td className="vcenter" column="details"> 
              <button className="btn btn-primary fa fa-eye"></button>
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

export default connect(mapStateToProps)(PokedexListMy);