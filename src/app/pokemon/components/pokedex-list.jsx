import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import PokedexListAll from './pokedex-list-all';
import PokedexListMy from './pokedex-list-my';

class PokedexList extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
console.log('CDM')
  }

  render() {
    const h2 = (title) => {
      return <h2>{title}</h2>
    }

    return (
      <Tabs>
        <TabList>
          <Tab>Pokemons</Tab>
          <Tab>Pokemons registered</Tab>
        </TabList>

        <TabPanel>
          {h2('Todos os Pokemons')}
          <div className="col-sm-12">
            <PokedexListAll />
          </div>
        </TabPanel>
        <TabPanel>
          {h2('My pokemons')}
            <PokedexListMy />
        </TabPanel>
      </Tabs>
    );
  }

}

export default connect()(PokedexList);