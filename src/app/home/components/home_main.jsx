import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'; 
import { Link } from 'react-router'

class Home extends React.Component {

  handleFactory() {
    
  }

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.setState({name: 'Everton', num: 0});
  }


  render() {
    
    return  (
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
            <div style={{minHeight:'35vh', float:'left', width:'100%'}}>
              
            </div>
            
            <div style={{ minHeight: '60vh', backgroundColor: 'red', float: 'left', width: '100%'}}>
              <img src="/assets/img/capa.png" style={{position: 'relative', left:'30%', top: '-170px'}}/>
            </div>
          </div>
          
          <div className="col-sm-6">
            <div style={{ minHeight: '45vh', float: 'left', width: '100%', backgroundColor:'black', margin:'45px', marginTop: '140px' }}>
              <img src="/assets/img/capa2.png" style={{ position: 'relative', left: '2px', top: '5px', width:'99%' }} />              
            </div>

            <div style={{ float: 'left', width: '100%', marginLeft:'45px'}} className="text-center" >
              <button className=" btn-lg btn-primary"> Estudar pokemons </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    
  };
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)