import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import PokedexListAll from './pokedex-list-all';
import PokedexListMy from './pokedex-list-my';

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
          <Tab>Pokemons</Tab>
          <Tab>Pokemons registered</Tab>
        </TabList>

        <TabPanel>
          <h2>All pokemons</h2>

          <div className="col-sm-12">
            <PokedexListAll />
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My pokemons</h2>
            <PokedexListMy />
        </TabPanel>
      </Tabs>
    );
  }

}

export default connect()(PokedexList);