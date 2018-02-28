import { INCREMENT, DECREMENT } from './actions_type';

export default (state = {}, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, { num: (state.num + 1) });
        case DECREMENT:
            if (state.num > 0) {
                return Object.assign({}, state, { num: (state.num - 1) });
            }
            return state
        default:
            return state
    }
}