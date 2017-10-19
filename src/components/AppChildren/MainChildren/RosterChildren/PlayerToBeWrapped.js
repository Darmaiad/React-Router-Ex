import React from 'react';
import Player from './Player';

export default class PlayerToBeWrapped extends React.Component {
  render() {
    return <Player player={this.props.data} />
  }
}