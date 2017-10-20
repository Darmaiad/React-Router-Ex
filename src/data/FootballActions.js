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

    editInput(id, text) {
        FootballDispatcher.dispatch({
            type: FootballActionTypes.EDIT_INPUT,
            id,
            text,
        });
    },

    startEditing(id) {
        FootballDispatcher.dispatch({
          type: FootballActionTypes.START_EDITING,
          id,
        });
      },
    
      stopEditing() {
        FootballDispatcher.dispatch({
          type: FootballActionTypes.STOP_EDITING,
        });
      },
};

export default FootballActions;