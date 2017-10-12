import React from 'react';
import { Link } from 'react-router-dom'
import PlayerAPI from '../../../../data/PlayerApi';
import FullRoster from './FullRoster';

class FullRosterContainer extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = { players: null }
    }

    componentDidMount() 
    {
        const players = PlayerAPI.all().map(p => (
        <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
        </li>
        ));
        
        this.setState({players: players });
    }
  
    render() 
    {
      return <FullRoster players={this.state.players} />
    }
}

export default FullRosterContainer;