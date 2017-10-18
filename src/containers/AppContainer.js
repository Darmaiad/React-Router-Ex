import { Container } from 'flux/utils';
import FootballStore from './../data/FootballStore'
import FootballActions from './../data/FootballActions'
import AppRoutingWrapper from './../components/AppRoutingWrapper';

function getStores() {
    return [
        FootballStore,
    ];
}

function getState() {
    return {
        players: FootballStore.getState(),
        onItemAdd: FootballActions.insertPlayer,
    }
}

export default Container.createFunctional(AppRoutingWrapper, getStores, getState);