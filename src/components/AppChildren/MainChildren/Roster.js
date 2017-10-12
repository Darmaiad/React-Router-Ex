import React from 'react';
import { Switch, Route } from 'react-router-dom'
import FullRosterContainer from './RosterChildren/FullRosterContainer'
import PlayerContainer from './RosterChildren/PlayerContainer'

const Roster = () => (
    <div>
        <h2>Roster Page</h2>
        <Switch>
            <Route exact path='/roster' component={FullRosterContainer}/>
            <Route path='/roster/:number' component={PlayerContainer}/>
        </Switch>
    </div>
)

export default Roster;