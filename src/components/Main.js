import React from 'react';
import { Switch, Route } from 'react-router-dom'
//import ReactDOM from 'react-dom';

const Main = () => (
    <main>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/>
        </Switch>
    </main>
)

export default Main;