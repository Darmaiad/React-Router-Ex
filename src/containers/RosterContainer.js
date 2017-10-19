import { Container } from 'flux/utils';
import FootballStore from './../data/FootballStore'
import FootballActions from './../data/FootballActions'
//import AppRoutingWrapper from './../components/AppRoutingWrapper';
import Roster from './../components/AppChildren/MainChildren/Roster';

function getStores() {
    return [
        FootballStore,
    ];
}

function getState() {
    return {
        players: FootballStore.getState(),
        onItemAdd: FootballActions.insertPlayer,
        onDeletePlayer: FootballActions.deletePlayer,
    }
}

export default Container.createFunctional(Roster, getStores, getState);