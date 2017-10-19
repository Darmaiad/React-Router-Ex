import React from 'react';
import ReactDOM from 'react-dom';
//import AppContainer from './containers/AppContainer';
import App from './components/App';
import FootballActions from './data/FootballActions';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

FootballActions.insertPlayer("anathemame an doulepsei");
FootballActions.insertPlayer("oxi siga");
FootballActions.insertPlayer("oooxi siga2");
