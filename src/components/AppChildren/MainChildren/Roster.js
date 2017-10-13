import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import FullRosterContainer from './RosterChildren/FullRosterContainer';
import PlayerContainer from './RosterChildren/PlayerContainer';
import FullRosterToBeWrapped from './RosterChildren/FullRosterToBeWrapped';
import PlayerAPI from '../../../data/PlayerApi';
import RosterHOC from './RosterHOC';


const Roster = () => {

    const RosterWrapped = RosterHOC (
        FullRosterToBeWrapped,
        (PlayerAPI) => PlayerAPI.all()
    );

    return (
    <div>
        <h2>Roster Page</h2>
        <Switch>
            <Route exact path='/roster' component={RosterWrapped}/>
            <Route path='/roster/:number' component={PlayerContainer}/>
        </Switch>
    </div>
    )
}

export default Roster;