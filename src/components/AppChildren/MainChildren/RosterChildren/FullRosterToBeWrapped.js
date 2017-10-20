import React from 'react';
import { Link } from 'react-router-dom';
import NewItem from './../../../shared/NewItem';

const FullRosterToBeWrapped = (props) => {

    const handleSubmitFromChild = (v) => {
        props.onItemAdd(v);
    }

    const handleDelete = (v) => {
        props.onDeletePlayer(v)
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
            <Link to={`/roster/${player.id}`}>{player.name}</Link>
            <button onClick={() => handleDelete(player.id)}>X</button>
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