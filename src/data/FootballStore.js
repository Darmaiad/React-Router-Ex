import { ReduceStore } from 'flux/utils';
import FootballActionTypes from './FootballActionTypes';
import FootballDispatcher from './FootballDispatcher';
import PlayerModel from './PlayerModel';
import Counter from './Counter';
import PlayerAPI from './PlayerApi';

class FootballStore extends ReduceStore {
    constructor() {
        super(FootballDispatcher);
    }

    getInitialState() {
        return PlayerAPI.all(); 
    }

    // The state here refers to the state.players in the container scope
    reduce(state, action) {
        switch (action.type) {

            case FootballActionTypes.INSERT_PLAYER:

                

                // Don't add Players with no text.
                if (!action.text) {
                    return state;
                }

                const id = Counter.increment();
                const tempPlayer =  new PlayerModel({
                    number: id,
                    name: action.text,
                    position: "QB",
                });

                //console.log(state);

                state.push( tempPlayer.returnObject() );

                return state;
                
            default:
                return state;
        }
    }
}

export default new FootballStore();