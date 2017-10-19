/**
 * Project from here: https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
 * 
 * Implemented Container / Presenter Pattern
 *      - FullRosterContainer
 *      - PlayerContainer
 * 
 * Implemented Higher Order Component Pattern
 *      - RosterHOC
 *      - FullRosterToBeWrapped
 *      - PlayerToBeWrapped
 *      Basically the HOC generated container components that replaces the previous ones.
 *      Passed function literals instead of data to the HOC-generated components.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './MainChildren/Home'
// import Roster from './MainChildren/Roster'
import RosterContainer from './../../containers/RosterContainer'
import Schedule from './MainChildren/Schedule'
import NoMatch from './NoMatch'

const Main = (props) => {

    return (

        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route  path='/roster' component={RosterContainer} />
                {/* <Route  path='/roster' render={()=><Roster {...props}/>} /> */}
                <Route path='/schedule' component={Schedule} />
                <Route component={NoMatch} />
            </Switch>
        </main>

    );
}

export default Main;