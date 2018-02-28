export default {
    path: 'pokedex',
    component: require('../components/pokedex').default,
    childRoutes: [{
        path: 'show/:id',
        getComponent(nextState, cb) {
            System.import( /* webpackChunkName: "garage" */ '../components/pokemon').then((m) => {
                cb(null, m.default)
            })
        }
    }]
};