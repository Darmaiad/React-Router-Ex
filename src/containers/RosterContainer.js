import { Container } from 'flux/utils';
import RosterStore from './../data/stores/RosterStore'
import PlayerEditStore from './../data/stores/PlayerEditStore'
import PlayerNameDraftStore from './../data/stores/PlayerNameDraftStore'
import FootballActions from './../data/FootballActions'
import Roster from './../components/AppChildren/MainChildren/Roster';

function getStores() {
    return [
        RosterStore,
        PlayerEditStore,
        PlayerNameDraftStore,
    ];
}

function getState() {
    return {
        players: RosterStore.getState(),
        editing: PlayerEditStore.getState(),
        draftText: PlayerNameDraftStore.getState(),

        onItemAdd: FootballActions.insertPlayer,
        onDeletePlayer: FootballActions.deletePlayer,
        onStartEditing: FootballActions.startEditing,
        onStopEditing: FootballActions.stopEditing,
        onEditInput: FootballActions.editInput,
        onSaveDraft: FootballActions.saveDraft,
    }
}

export default Container.createFunctional(Roster, getStores, getState);