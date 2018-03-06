import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

import Reactable from 'reactable';

class PokedexListAll extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  render() {
    var Table = Reactable.Table;
    var Tr = Reactable.Tr;
    var Td = Reactable.Td;

    let allPokemons = [
          {'id': 1, 'name': 'Bulbasaur'},
          {'id': 2, 'name': 'Ivysaur'},
          {'id': 3, 'name': 'Blastoide'},
      ];

    return (
     <Table className="table" id="table" 
             filterable={['id', 'name']}  >
        {allPokemons.map((pokemon) => {

          let hasInMyPokedex = pokemon.id%2==0;
          let addBtn = hasInMyPokedex ? 'btn btn-primary fa fa-minus-circle' : 'btn btn-primary fa fa-plus-circle'
          let imgSrc = "/assets/img/pokemons/"+pokemon.name.toLowerCase().replace(" ", "-")+".png";
          
          return <Tr key={pokemon.id}>
            <Td className="vcenter" column="id" data={pokemon.id} />
            <Td className="vcenter" column="name" data={pokemon.name} />
            <Td className="vcenter" column="icon">
              <img src={imgSrc} width={'50px'}/>
            </Td>
            <Td className="vcenter" column="add"> 
              <button className={addBtn}></button>
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
    
  }
}

export default connect(mapStateToProps)(PokedexListAll);