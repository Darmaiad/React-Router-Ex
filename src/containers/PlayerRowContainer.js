import { Container } from 'flux/utils';
import PlayerEditStore from './../data/stores/PlayerEditStore'
import RosterStore from './../data/stores/RosterStore'
import FootballActions from './../data/FootballActions'
import NewItemInput from './../shared/NewItemInput';
import PlayerRow from './../components/AppChildren/MainChildren/RosterChildren/FullRosterChildren/PlayerRow'

function getStores() {
    return [
        PlayerEditStore,
        RosterStore
    ];
}

function getState() {
    return {
        players: RosterStore.getState(),

        onItemAdd: FootballActions.insertPlayer,
        onDeletePlayer: FootballActions.deletePlayer,

        onEditInput: FootballActions.editInput,
        onStartEditingTodo: FootballActions.startEditing,
        onStopEditingTodo: FootballActions.stopEditing,
    }
}

export default Container.createFunctional(PlayerRow, getStores, getState);