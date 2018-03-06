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

    let myPokemons = [
          {'id': 1, 'name': 'Bulbasaur'},
      ];

    return (
     <Table className="table" id="table" 
             filterable={['id', 'name']}  >
        {myPokemons.map((pokemon) => {

          return <Tr key={pokemon.id}>
            <Td column="id" data={pokemon.id} />
            <Td column="name" data={pokemon.name} />
            <Td column="icon" data={pokemon.name} />
            
            <Td column="details"> 
              <button className="btn btn-primary fa fa-eye"></button>
            </Td>
          </Tr>
        })}
      </Table>
    );
  }

}

export default connect()(PokedexListMy);