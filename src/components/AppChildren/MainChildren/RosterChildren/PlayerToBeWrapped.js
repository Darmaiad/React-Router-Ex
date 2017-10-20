import React from 'react';
import { Link } from 'react-router-dom'

export default class PlayerToBeWrapped extends React.Component {
  render() {
    if (!this.props.data) {
      return <div>Sorry, but the player was not found</div>
    }

    return (
      <div >
        <h1>{this.props.data.name} (#{this.props.data.number})</h1>
        <h2>{this.props.data.position}</h2>
        <Link to='/roster'>Back</Link>
      </div > 
    );
  }
}