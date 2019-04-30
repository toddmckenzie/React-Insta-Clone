import React from 'react';
import './PostContainer.scss';


const Image = props => {

  return (
    <div className="individual">
      <div className="image-flex">
        <img src={props.img} className='userImg' alt='User post'/>
        <p className="title">{props.user}</p>
      </div>
      <img src={props.post} alt='Source img'/>
    </div>
  )
}


export default Image;
