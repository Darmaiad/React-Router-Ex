import { ReduceStore } from 'flux/utils';
import FootballActionTypes from './../FootballActionTypes';
import FootballDispatcher from './../FootballDispatcher';

class PlayerNameDraftStore extends ReduceStore {
    constructor() {
        super(FootballDispatcher);
    }

    getInitialState() {
        return '';
    }

    reduce(state, action) {
        switch (action.type) {
            case FootballActionTypes.ADD_DRAFT:
                return '';

            case FootballActionTypes.UPDATE_DRAFT:
                return action.text;

            default:
                return state;
        }
    }
}

export default new PlayerNameDraftStore();