import React from 'react';

const IndividualComponent = props => {

  return (
    <div>
     {console.log(props.data)}
      <p>{props.data.username}</p>
    </div>
  )
}

export default IndividualComponent;
