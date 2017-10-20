import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRosterToBeWrapped from './RosterChildren/FullRosterToBeWrapped';
import PlayerToBeWrapped from './RosterChildren/PlayerToBeWrapped';
import RosterHOC from './RosterHOC';

const Roster = (props) => {

    // Filter props to pass to HOC that will wrap the Roster
    const { players, ...actionsOnly } = props;

    const RosterWrapped = RosterHOC (
        FullRosterToBeWrapped,
        props.players.values.bind(props.players),
        actionsOnly
    );

    const PlayerWrapped = RosterHOC(
        PlayerToBeWrapped,
        props.players.get.bind(props.players),
    );

    return (
        <div>
            <h2>Roster Page</h2>
            <Switch>
                <Route path='/roster/:number' component={PlayerWrapped} />
                <Route path='/roster' component={RosterWrapped} />
                {/* A potentially useful syntax: 
                <Route exact path='/roster:number' render={()=><Player {...props}  />}/> */}
            </Switch>
        </div>
    )
}

export default Roster;