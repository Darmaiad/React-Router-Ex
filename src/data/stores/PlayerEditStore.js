import { ReduceStore } from 'flux/utils';
import FootballActionTypes from './../FootballActionTypes';
import FootballDispatcher from './../FootballDispatcher';

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
                console.log("Started editing: " + action.id);
                return action.id;

            case FootballActionTypes.STOP_EDITING:
                console.log("Stopped editing");
                return '';

            default:
                return state;
        }
    }
}

export default new PlayerEditStore();