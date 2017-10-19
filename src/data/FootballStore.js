import Immutable from 'immutable';
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
        return Immutable.OrderedMap();
    }

    // The state here refers to the state.players in the container scope
    reduce(state, action) {
        switch (action.type) {

            case FootballActionTypes.DELETE_PLAYER:
                console.log(action.id);

                
                return state.delete(action.id);

            case FootballActionTypes.INSERT_PLAYER:

                // Don't add Players with no text.
                if (!action.text) {
                    return state;
                }

                const idObj = Counter.increment();
                // const tempPlayer =  new PlayerModel({
                //     number: id,
                //     name: action.text,
                //     position: "QB",
                // });
                // state.push( tempPlayer.returnObject() );

                // state.players.push({
                //     number: id,
                //     name: action.text,
                //     position: "QB",
                // });

                return state.set(idObj.id, new PlayerModel({
                    id: idObj.id,
                    number: idObj.num,
                    name: action.text,
                    position: 'QB',
                }));



            default:
                return state;
        }
    }
}

export default new FootballStore();