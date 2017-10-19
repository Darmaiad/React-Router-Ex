import FootballDispatcher from './FootballDispatcher';
import FootballActionTypes from './FootballActionTypes';

const FootballActions = {
    insertPlayer(text) {
        FootballDispatcher.dispatch({
            type: FootballActionTypes.INSERT_PLAYER,
            text,
        });
    },

    deletePlayer(id) {
        FootballDispatcher.dispatch({
            type: FootballActionTypes.DELETE_PLAYER,
            id,
        });
    },
};

export default FootballActions;