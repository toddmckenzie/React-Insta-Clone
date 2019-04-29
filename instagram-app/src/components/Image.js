import React from 'react';

const Image = props => {

  return (
    <div>
      <p><img src={props.img} alt='User post'/> {props.user}</p>
      <img src={props.post} alt='Source img'/>
    </div>
  )
}


export default Image;
