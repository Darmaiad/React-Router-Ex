import React from 'react';

export default class NewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }
    
    handleSubmit = (event) => {
        this.props.onSubmit(this.state.value);
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Insert new item"
                    onChange={this.handleChange}
                />
                <input
                    type="submit"
                    value="Add"
                />
            </form>
        );
    }
}