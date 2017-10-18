import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import FootballActions from './data/FootballActions';

ReactDOM.render(
    <AppContainer />,
  document.getElementById('root')
);

FootballActions.insertPlayer("anathemame an doulepsei");
FootballActions.insertPlayer("oxi siga");
FootballActions.insertPlayer("oooxi siga2");
