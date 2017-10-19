import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './RosterChildren/FullRoster';
import PlayerToBeWrapped from './RosterChildren/PlayerToBeWrapped';
import RosterHOC from './RosterHOC';
import PlayerAPI from '../../../data/PlayerApi';


const Roster = (props) => {

    // const RosterWrapped = RosterHOC (
    //     FullRosterToBeWrapped,
    //     PlayerAPI.all.bind(PlayerAPI),
    //     props
    // );

    const PlayerWrapped = RosterHOC (
        PlayerToBeWrapped,
        PlayerAPI.get.bind(PlayerAPI),
        props
    );

    return (
        <div>
            <h2>Roster Page</h2>
            <Switch>
                {/* <Route exact path='/roster' component={RosterWrapped}/> */}
                <Route exact path='/roster' render={()=><FullRoster {...props} />}/>
                
                <Route path='/roster/:number' component={PlayerWrapped}/>
            </Switch>
        </div>
    )
}

export default Roster;