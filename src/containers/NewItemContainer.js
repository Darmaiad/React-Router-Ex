import { Container } from 'flux/utils';
import DraftStore from './../data/stores/DraftStore'
import FootballActions from './../data/FootballActions'
import NewItem from './../shared/NewItem';

function getStores() {
    return [
        DraftStore,
    ];
}

function getState() {
    return {
        players: DraftStore.getState(),
        onItemAdd: FootballActions.insertPlayer,
        onDeletePlayer: FootballActions.deletePlayer,
    }
}

export default Container.createFunctional(NewItem, getStores, getState);