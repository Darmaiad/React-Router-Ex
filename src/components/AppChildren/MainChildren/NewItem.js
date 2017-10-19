import React from 'react';

const NewItem = (props) => {

    const handleClick = (event) => {
        props.onClick(event.target.value);
    }

    const handleSubmit = (event) => {
        props.onSubmit(event.target.value);
        event.preventDefault();
        

    }

    const handleChange = (event) => {
        props.onChange(event.target.value);

        //event.preventDefault();
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