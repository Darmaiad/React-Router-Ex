import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';

//import AppView from './components/AppView';

import AppContainer from './containers/AppContainer';

import FootballActions from './data/FootballActions';


ReactDOM.render(
  // <BrowserRouter>
    <AppContainer />,
  // </BrowserRouter>,
  document.getElementById('root')
);

FootballActions.insertPlayer("anathemame an doulepsei");
FootballActions.insertPlayer("oxi siga");
