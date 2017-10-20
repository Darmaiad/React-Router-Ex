import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './RosterChildren/FullRoster';
import FullRosterToBeWrapped from './RosterChildren/FullRosterToBeWrapped';
import PlayerToBeWrapped from './RosterChildren/PlayerToBeWrapped';
import Player from './RosterChildren/Player';
import RosterHOC from './RosterHOC';
import PlayerAPI from '../../../data/PlayerApi';


const Roster = (props) => {

    const RosterWrapped = RosterHOC (
        FullRosterToBeWrapped,
        props.players.values.bind(props.players),
    );

    const PlayerWrapped = RosterHOC(
        PlayerToBeWrapped,
        //PlayerAPI.get.bind(PlayerAPI),
        props.players.get.bind(props.players),
    );

    return (
        <div>
            <h2>Roster Page</h2>
            <Switch>
                {/* <Route exact path='/roster' component={RosterWrapped}/> */}
                <Route exact path='/roster' render={() => <RosterWrapped {...props} />} />
                {/* <Route exact path='/roster' render={() => <FullRoster {...props} />} /> */}
                {/* <Route exact path='/roster:number' render={()=><Player {...props}  />}/> */}

                <Route path='/roster/:number' component={PlayerWrapped} />
            </Switch>
        </div>
    )
}

export default Roster;