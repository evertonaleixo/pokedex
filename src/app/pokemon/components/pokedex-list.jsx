import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class PokedexList extends React.Component {

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
    
    return (
      <Tabs>
        <TabList>
          <Tab>Lista de pokemons</Tab>
          <Tab>Pokemons registrados</Tab>
        </TabList>

        <TabPanel>
          <h2>Lista de pokemons</h2>
        </TabPanel>
        <TabPanel>
          <h2>Meus pokemons</h2>
        </TabPanel>
      </Tabs>
    );
  }

}

export default connect()(PokedexList);