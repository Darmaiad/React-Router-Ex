import React from 'react';
import { Switch, Route } from 'react-router-dom'
import FullRoster from './RosterChildren/FullRoster'
import Player from './RosterChildren/Player'

const Roster = () => (
    <div>
        <h2>Roster Page</h2>
        <Switch>
            <Route exact path='/roster' component={FullRoster}/>
            <Route path='/roster/:number' component={Player}/>
      </Switch>
    </div>
)

export default Roster;