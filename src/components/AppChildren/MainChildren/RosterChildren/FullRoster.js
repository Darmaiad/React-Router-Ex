import React from 'react';

const FullRoster = (props) => {

  return (
    <div> 
      <ul>
        {props.players}  
      </ul>
    </div>
  )
}

export default FullRoster;