import FootballDispatcher from './FootballDispatcher';
import FootballActionTypes from './FootballActionTypes';

const FootballActions = {
    insertPlayer(text) {
        FootballDispatcher.dispatch({
            type: FootballActionTypes.INSERT_PLAYER,
            text,
        });
    },
};

export default FootballActions;