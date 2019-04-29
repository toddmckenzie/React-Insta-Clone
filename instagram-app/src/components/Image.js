import React from 'react';

const Image = props => {

  return (
    <div>
      <p><img src={props.img}/> {props.user}</p>
      <img src={props.post}/>
    </div>
  )
}

export default Image;
