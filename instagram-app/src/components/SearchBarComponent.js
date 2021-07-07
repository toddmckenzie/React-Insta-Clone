import React from 'react';
import camera from './images/camera.png';
//import comment from './images/comment.png';
import explore from './images/explore.png';
import heart from './images/heart.png';
import person from './images/person.png';
import './SearchBarComponent.scss';
import styled from 'styled-components';

const HeaderFlexs = styled.div`
  padding-left: 15%;
  padding-right: 10%;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  border-bottom: 1px solid gray;
  display: flex;
  width: 1100px;
  margin: 0 auto;
  background-color: white;
  ;`

const Paras = styled.p`
  font-size: 30px;
  margin-top: 25px;`

const Instas = styled.h1`
  font-family: cursive;
  font-size: 26px;
  margin-bottom: 20px;
  margin-left: 10px;
  padding-right: 50px;
  margin-top: 25px;
  padding-right: 15%;`

const SearchBarComponent = props => {
  return (
      <HeaderFlexs>
          <img src={camera} alt='camera' className="camera"/>
          <Paras>|</Paras>
          <Instas>Instagram</Instas>
          <form onSubmit={props.filterPost}>
            <input value={props.data.filtered}
            type="text"
            className="search"
            name="filtered"
            placeholder="🔍 Search"
            onChange={props.handleChange}
            >
            </input>
          </form>
          <div className="images-icons">
            <img src={explore} alt='expore' />
            <img src={heart} alt='heart' />
            <img src={person} alt='person' />
          </div>
      </HeaderFlexs>
    )
}


export default SearchBarComponent;
