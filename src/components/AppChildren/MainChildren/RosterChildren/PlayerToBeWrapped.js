import React from 'react';
import Player from './Player';

export default class PlayerToBeWrapped extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = { player: null }          
    }

    componentDidMount() 
    {
      const player = this.props.data;
      this.setState({player: player });
    }
  
    render() 
    {
      return <Player player={this.state.player} />
    }

}