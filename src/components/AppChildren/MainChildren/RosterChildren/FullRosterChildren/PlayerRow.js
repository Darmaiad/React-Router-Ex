import React from 'react';
import { Link } from 'react-router-dom';

const PlayerRow = (props) => {

    const ENTER_KEY_CODE = 13;
    const editing = props.editing;
    const isEditing = editing === props.player.id;

    const handleDelete = () => {
        props.onDeletePlayer(props.player.id);
    }

    const handleStartEditing = () => {
        props.onStartEditing(props.player.id);
    }

    // Construct the input for editing a task if necessary.
    let editInput, playerLink = null;
    if (isEditing) {
        const onChange = (event) => props.onEditInput(props.player.id, event.target.value);
        const onStopEditing = props.onStopEditing;

        const saveDraft = () => props.onAddDraft(props.draftText);
        
        const onKeyDown = (event) => {
            if (event.keyCode === ENTER_KEY_CODE) {
                onStopEditing();
            }
        };
        editInput =
            <input
                autoFocus
                type="text"
                value={props.player.name}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onBlur={onStopEditing}
            />;
    }
    else {
        playerLink = 
            <span>
                <Link to={`/roster/${props.player.id}`}>{props.player.name}</Link>
                <button onClick={handleStartEditing} >Edit</button>
            </span>;
    }

    return (
        <span>
            
            {playerLink}
            {editInput}
            <button onClick={handleDelete}>X</button>
            
            
        </span>
    );
}

export default PlayerRow;