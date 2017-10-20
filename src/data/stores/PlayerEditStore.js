import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import FootballActionTypes from './../FootballActionTypes';
import FootballDispatcher from './../FootballDispatcher';
import PlayerModel from './../models/PlayerModel';
import Counter from './../../utilities/Counter';
import PlayerAPI from './../PlayerApi';

class PlayerEditStore extends ReduceStore {
    constructor() {
        super(FootballDispatcher);
    }

    getInitialState() {
        return '';
    }

    reduce(state, action) {
        switch (action.type) {

            case FootballActionTypes.START_EDITING:
                return action.id;

            case FootballActionTypes.STOP_EDITING:
                return '';

            default:
                return state;
        }
    }
}

export default new PlayerEditStore();