import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './MainChildren/Home'
import Roster from './MainChildren/Roster'
import Schedule from './MainChildren/Schedule'
import NoMatch from './NoMatch'
//import ReactDOM from 'react-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/>
            <Route component={NoMatch}/>
        </Switch>
    </main>
)

export default Main;