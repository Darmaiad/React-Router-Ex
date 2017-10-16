import { Container } from 'flux/utils';
import FootballStore from './../data/FootballStore'
import App from './../components/App';

function getStores() {
    return [
        FootballStore,
    ];
}

function getState() {
    return {
        players: FootballStore.getState(),
    };
}

export default Container.createFunctional(App, getStores, getState);