import React from 'react';
import { Link } from 'react-router-dom'

const PlayerToBeWrapped = (props) => {

  if (!props.data) {
    return <div>Sorry, but the player was not found</div>
  }

  return (
    <div >
      <h1>{props.data.name} (#{props.data.number})</h1>
      <h2>{props.data.position}</h2>
      <Link to='/roster'>Back</Link>
    </div >
  );
}

export default PlayerToBeWrapped