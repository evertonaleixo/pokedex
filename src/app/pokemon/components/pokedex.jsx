import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import PokedexList from './pokedex-list';

class Pokemon extends React.Component {

  onAct(e) {
    this.props.onAct(this.props.id, this.props.val);
  }

  constructor(props){
    super(props);

    this.onAct = this.onAct.bind(this);
  }

  componentDidMount() {

  }

  render() {

    console.log(PokedexList)
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
            <div style={{ minHeight: '45vh', float: 'left', width: '100%', backgroundColor: 'black', margin: '45px', marginTop: '140px' }}>
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default connect()(Pokemon);