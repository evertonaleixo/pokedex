import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, hashHistory} from 'react-router'

import store from './store/configureStore'

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
