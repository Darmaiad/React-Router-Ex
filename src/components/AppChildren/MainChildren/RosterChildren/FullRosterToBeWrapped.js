import React from 'react';
import { Link } from 'react-router-dom';
import FullRoster from './FullRoster';

export default class FullRosterToBeWrapped extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = {
            roster: null,
        };     
    }

    componentDidMount() 
    {
        // const players = this.props.players.map(p => (
        //     <li key={p.number}>
        //         <Link to={`/roster/${p.number}`}>{p.name}</Link>
        //     </li>
        // ));

        // All 4 commented implementations are correct
        
        //this.setState({players: players });

        //this.setState( {players} );

        // this.setState(function(prevState, props){
        //     return {players: players}
        //  });

        // this.setState(function(){
        //     return {players: players}
        //  });

        // this.setState( {roster: players}  );
    }
  
    render() 
    {
        console.log(this.props.data)
        //return <FullRoster players2 = {this.state.roster} {...this.props} />
        // return <FullRoster  {...this.props} />
         return null;
    }   
}

// [...this.props.players.values()].map(player => (
//     <li key={player.number}>
//       <Link to={`/roster/${player.number}`}>{player.name}</Link>
//       <button onClick={() => this.handleDelete(player.id)}>
//         X
//       </button>
//     </li>
//   ))