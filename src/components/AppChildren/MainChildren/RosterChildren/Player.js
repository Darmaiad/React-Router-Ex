import React from 'react';
import { Link } from 'react-router-dom'

const Player = (props) => {
  
  if (!props.player) {
    return <div>Sorry, but the player was not found</div>
  }

  return (
    <div>
      <h1>{props.player.name} (#{props.player.number})</h1>
      <h2>{props.player.position}</h2>
      <Link to='/roster'>Back</Link>
    </div> 
  )
}

export default Player;