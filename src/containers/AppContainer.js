import { Container } from 'flux/utils';
import FootballStore from './../data/FootballStore'
//import App from './../components/App';
import AppRoutingWrapper from './../components/AppRoutingWrapper';

function getStores() {
    return [
        FootballStore,
    ];
}

function getState() {

    return FootballStore.getState();
    
}

export default Container.createFunctional(AppRoutingWrapper, getStores, getState);