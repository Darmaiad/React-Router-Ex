import React from 'react';
import { Link } from 'react-router-dom';
import FullRoster from './FullRoster';

export default class FullRosterToBeWrapped extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = {
            players2: null,
        };

       //console.log("Full Roster to be wrapped");
       // console.log(this.props);
        
    }

    componentDidMount() 
    {

       // console.log(this.props);
        const players = this.props.data.map(p => (
            <li key={p.number}>
                <Link to={`/roster/${p.number}`}>{p.name}</Link>
            </li>
        ));
        console.log(players);

        // All 4 commented implementations are correct
        
        //this.setState({players: players });

        //this.setState( {players} );

        // this.setState(function(prevState, props){
        //     return {players: players}
        //  });

        // this.setState(function(){
        //     return {players: players}
        //  });

        this.setState( {players2: players}  );
        console.log("Full Roster to be wrapped");
        console.log(this.state.players2);

    }
  
    render() 
    {
        return <FullRoster players = {this.state.players2} {...this.props} />
    }   
}