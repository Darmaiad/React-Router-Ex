import React from 'react';
import { Link } from 'react-router-dom';


const PlayerRow = (props) => {

    const handleDelete = () => {
        props.onDeletePlayer(props.player.id)
    }

    const handleEdit = () => {
    }

    return (
        <div>
            <Link to={`/roster/${props.player.id}`}>{props.player.name}</Link>
            <button onClick={handleDelete}>X</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
}

export default PlayerRow;