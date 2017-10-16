import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';

//import App from './components/App';

import AppContainer from './containers/AppContainer';

import FootballActions from './data/FootballActions';


ReactDOM.render(
  // <BrowserRouter>
  //   <AppContainer />
  // </BrowserRouter>,
  <AppContainer />,
  document.getElementById('root')
  );

FootballActions.insertPlayer("anathemame an doulepsei");