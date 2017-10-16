import { ReduceStore } from 'flux/utils';
import FootballActionTypes from './FootballActionTypes';
import FootballDispatcher from './FootballDispatcher';
import PlayerModel from './PlayerModel';
import Counter from './Counter';

class FootballStore extends ReduceStore {
    constructor() {
        super(FootballDispatcher);
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {

            case FootballActionTypes.INSERT_PLAYER:

                // Don't add Players with no text.
                if (!action.text) {
                    return state;
                }

                const id = Counter.increment();
                return state.push(new PlayerModel({
                    id,
                    number: 111,
                    name: action.text,
                    position: "QB",
                }));
                

            default:
                return state;
        }
    }
}

export default new FootballStore();