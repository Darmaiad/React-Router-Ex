import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import FootballActionTypes from './../FootballActionTypes';
import FootballDispatcher from './../FootballDispatcher';
import PlayerModel from './../models/PlayerModel';
import Counter from './../../utilities/Counter';
import PlayerAPI from './../PlayerApi';

class RosterStore extends ReduceStore {
    constructor() {
        super(FootballDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap(
                PlayerAPI.all().map((item) => ( [item.id, new PlayerModel(item)] )
            )
        );
    }

    // The state here refers to the state.players in the container scope
    reduce(state, action) {
        switch (action.type) {
            
            case FootballActionTypes.INSERT_PLAYER:
            
                // Don't add Players with no text.
                if (!action.text) {
                    return state;
                }
                
                const idObj = Counter.increment();
                
                return state.set(idObj.id, new PlayerModel({
                    id: idObj.id,
                    number: idObj.num,
                    name: action.text,
                    position: 'QB',
                }));
            
            // case FootballActionTypes.EDIT_INPUT:
            
            //     //return state.setIn([action.id, 'name'], action.text);
            //     return action.text;
            
            case FootballActionTypes.DELETE_PLAYER:

                return state.delete(action.id);

            default:
                return state;
        }
    }
}

export default new RosterStore();