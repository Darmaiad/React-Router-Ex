import React from 'react';

const NewItem = (props) => {

    const handleClick = () => {
        props.onClick();
        //console.log(this.input.value);

        //event.preventDefault();
    }

    const handleChange = (event) => {
        props.onChange(event.target.value);
        //console.log(this.input.value);

        event.preventDefault();
    }

    return (
        <div>
            <input
                placeholder="Insert new item"
                onChange={handleChange}
            />
            <input
                type="button"
                value="Add"
                onClick={handleClick}
            />
        </div>
    );

}

export default NewItem;