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

  }
  
  loading() {
    return <Loading />
  }

  render() {

    return (
      <div className="container">
        {this.props.loading && this.loading()}
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
            
            <PokemonInfo />

          </div>
        </div>
      </div>
    );
  }

}
function mapStateToProps(state) {
  return {
    loading: state.pokemon_reducer.loading,
  }
}
export default connect(mapStateToProps)(Pokemon);