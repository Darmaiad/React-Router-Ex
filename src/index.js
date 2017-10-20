import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FootballActions from './data/FootballActions';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

FootballActions.insertPlayer("Mock McMockerson");
FootballActions.insertPlayer("Sample Sampleski");
FootballActions.insertPlayer("Eig Eigenplayer");