import React from 'react';

const NewItem = (props) => {

    const handleSubmit = (event) => {
        props.onSubmit(event.target.value);
        event.preventDefault();
    }

    const handleChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Insert new item"
                onChange={handleChange}
            />
            <input
                type="submit"
                value="Add"
            />
        </form>
    );

}

export default NewItem;