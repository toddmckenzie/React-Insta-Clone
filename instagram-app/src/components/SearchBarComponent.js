import React from 'react';
import camera from './images/camera.png';
import comment from './images/comment.png';
import explore from './images/explore.png';
import heart from './images/heart.png';
import person from './images/person.png';
import './SearchBarComponent.scss';

const SearchBarComponent = props => {
  return (
    <div className='headerFlex'>
      <div className='smaller-header'>
        <img src={camera} alt='camera' className="camera"/>
        <p>|</p><h1>Instagram</h1>
        <input value="Search" className="search"></input>
        <img src={explore} alt='expore' />
        <img src={heart} alt='heart' />
        <img src={person} alt='person' />
      </div>
    </div>
  )
}

export default SearchBarComponent;
