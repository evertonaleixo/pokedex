import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import PokedexList from './pokedex-list';
import PokemonInfo from './pokemon-info';

class Pokemon extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div style={{ float: 'left', width: '100%' }}>
              <h1 style={{ margin: '15px' }} className='text-center font-weight-bold text-uppercase' >
                Pokedex
              </h1>
            </div>
          </div>

          <div className="col-sm-6" style={{ borderRight: '1px dashed', minHeight: '95h' }}>
            <PokedexList />
          </div>

          <div className="col-sm-6">
            <div style={{ minHeight: '45vh', float: 'left', width: '100%', backgroundColor: 'black', margin: '45px', marginTop: '70px' }}>
              <PokemonInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default connect()(Pokemon);