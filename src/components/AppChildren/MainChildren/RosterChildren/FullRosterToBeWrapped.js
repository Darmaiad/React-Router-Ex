import React from 'react';
import { Link } from 'react-router-dom';
import FullRoster from './FullRoster';
import PlayerAPI from '../../../../data/PlayerApi';

class FullRosterToBeWrapped extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = {
            players: null,
        };
    }

    componentDidMount() 
    {
        const thePlayers = this.props.data.map(p => (
        <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
        </li>
        ));
        
        this.setState({players: thePlayers });
    }
  
    render() 
    {
        return <FullRoster players={this.state.players} />

        // return (
        //     <div> 
        //         <ul>
        //             {this.state.players}  
        //         </ul>
        //     </div>
        // )
    }
      
    
}

export default FullRosterToBeWrapped;