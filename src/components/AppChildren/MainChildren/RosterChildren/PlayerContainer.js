import React from 'react';
import PlayerAPI from '../../../../data/PlayerApi';
import Player from './Player';

class PlayerContainer extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = { player: null }
    }

    componentDidMount() 
    {
      const player = PlayerAPI.get(
          parseInt(this.props.match.params.number, 10)
      )
      
      this.setState({player: player });
    }
  
    render() 
    {
      return <Player player={this.state.player} />
    }
  }

export default PlayerContainer;