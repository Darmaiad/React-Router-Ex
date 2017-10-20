import React from 'react';

export default class NewItemInput extends React.Component {

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder={`Insert new ${this.props.item}'s name`}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
