import React from 'react';
import NewItem from './../../../shared/NewItem';
import PlayerRow from './FullRosterChildren/PlayerRow';

const FullRosterToBeWrapped = (props) => {

    const handleSubmitFromChild = (v) => {
        props.onItemAdd(v);
    }

    // All 4 commented implementations are correct:

    //this.setState({players: players });
    //this.setState( {players} );
    // this.setState(function(prevState, props){
    //     return {players: players}
    //  });
    // this.setState(function(){
    //     return {players: players}
    //  });

    const players = [...props.data].map(player => (
        <li key={player.number}>
            <PlayerRow 
                player = {player}
                onDeletePlayer = {props.onDeletePlayer}
            />
        </li>
        
    ));

    return (
        <div>
            <NewItem
                onSubmit={handleSubmitFromChild}
                item = {"player"}
            />
            <ul>
                {players}
            </ul>
        </div>
    );
}

export default FullRosterToBeWrapped