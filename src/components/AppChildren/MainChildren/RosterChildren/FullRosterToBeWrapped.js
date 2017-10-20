import React from 'react';
import { Link } from 'react-router-dom';
import NewItem from './../NewItem';

export default class FullRosterToBeWrapped extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    componentDidMount() {   
        
    }

    handleSubmitFromChild = (e) => {
        this.props.onItemAdd(e);
    }

    handleDelete = (v) => {
        this.props.onDeletePlayer(v)
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

    render() {
        const players = [...this.props.data].map(player => (
            <li key={player.number}>
                <Link to={`/roster/${player.id}`}>{player.name}</Link>
                <button onClick={() => this.handleDelete(player.id)}>X</button>
            </li>
        ));
    
        return (
            <div>
                <NewItem
                    onSubmit={this.handleSubmitFromChild}
                />
                <ul>
                    {players}
                </ul>
            </div>
        );
    }
}