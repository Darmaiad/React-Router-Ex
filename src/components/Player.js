import React from 'react';

const Player = (props) => {

  const player = parseInt(props.match.params.number, 10);
  
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }

  return (
    <div>
      <p>Player Number: {player}</p>
    </div>  
  )
}

export default Player;