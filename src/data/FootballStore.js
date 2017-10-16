import { ReduceStore } from 'flux/utils';
import FootballActionTypes from './FootballActionTypes';
import FootballDispatcher from './FootballDispatcher';

class FootballStore extends ReduceStore {
    constructor() {
        super(FootballDispatcher);
    }

    getInitialState() {
        return {};
    }

    reduce(state, action) {
        switch (action.type) {
            case FootballActionTypes.INSERT_PLAYER:
                // Do nothing for now, we will add logic here soon!
                return state;

            default:
                return state;
        }
    }
}

export default new FootballStore();