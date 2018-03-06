import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, hashHistory} from 'react-router';

import store from './store/configureStore';

import { LOAD_ALL_POKEMON } from './pokemon/reducers/actions_type';

const history = syncHistoryWithStore(hashHistory, store);

const routes = {

  path: '/',
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },
  childRoutes: [
    require('./home/route').default,
    require('./pokemon/route').default,
  ]
};

ReactDOM.render((
   <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
   </Provider>
), document.getElementById('pokedex-root'));

store.dispatch(
  {
    type: LOAD_ALL_POKEMON,
    endpoint: {
      method: 'GET',
  		url: 'https://pokeapi.co/api/v2/pokemon/?limit=100',
    }
  }
);

store.dispatch(
  {
    type: LOAD_ALL_POKEMON,
    endpoint: {
      method: 'GET',
  		url: 'https://pokeapi.co/api/v2/pokemon/?limit=1000',
    }
  }
);
