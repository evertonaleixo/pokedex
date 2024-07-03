import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import PokedexList from './pokedex-list';
import PokemonInfo from './pokemon-info';
import Loading from './loading'

class Pokemon extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount() {
    console.log('CDM')
  }

  render() {

    return (
      <div className="container">
        {this.props.loading && <Loading />}
        <div className="row">
          <div className="col-sm-12">
            <div style={{ float: 'left', width: '100%' }}>
              <h1 style={{ margin: '15px' }} className='text-center font-weight-bold text-uppercase' >
                Pokedex
              </h1>
            </div>
          </div>

          <div className="col-sm-6 col-md-12" style={{ borderRight: '1px dashed', minHeight: '85h' }}>
            <PokedexList />
          </div>

          <div className="col-sm-6 col-md-12">
            <PokemonInfo />
          </div>
        </div>
      </div>
    );
  }

}
function mapStateToProps(state) {
  const loading = state.pokemon_reducer.loading
  return {
    loading: loading,
  }
}
export default connet(mapStateToProps)(Pokemon);