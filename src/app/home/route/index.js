export default {
    path: 'pokedex',
    component: require('../components/home_main').default,
    childRoutes: [{
            path: 'main',
            getComponent(nextState, cb) {
                System.import( /* webpackChunkName: "garage" */ '../components/home_main').then((m) => {
                    cb(null, m.default)
                })
            }
        },
        {
            path: 'open',
            getComponent(nextState, cb) {
                System.import( /* webpackChunkName: "dealership" */ '../components/home_main').then((m) => {
                    cb(null, m.default)
                })
            }
        }
    ]
};