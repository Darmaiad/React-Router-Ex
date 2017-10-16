import ActionTypes from './ActionTypes';
import FootballDispatcher from './FootballDispatcher';

const FootballActions = {
    insertPlayer(text) {
        FootballDispatcher.dispatch({
            type: FootballActionTypes.INSERT_PLAYER,
            text,
        });
    },
};

export default FootballActions;