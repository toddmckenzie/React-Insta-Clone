import React from 'react';
import './PostContainer.scss';


const Image = props => {

  return (
    <div>
      <p className="title"><img src={props.img} className='userImg' alt='User post'/> {props.user}</p>
      <img src={props.post} alt='Source img'/>
    </div>
  )
}


export default Image;
