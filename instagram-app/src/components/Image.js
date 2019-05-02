import React from 'react';
import './PostContainer.scss';
import styled from 'styled-components';

const Individual = styled.div`
  margin-top: 10px;
  margin-bottom: 0;
  margin-right: 580px;`

const Title = styled.p`
  margin-bottom: 30px;`

const UserImage = styled.img`
  height: 40px;
  width: auto;
  border-radius: 50%;
  margin-top: 2px;`

const ImageFlex = styled.div`
  padding-left: 25%;
  display: flex;
  height: 20px;`

const UserPost = styled.img`
  height: auto;
  width: 640px;`


const Image = props => {

  return (
    <Individual>
      <ImageFlex>
        <UserImage src={props.img} alt='User post'></UserImage>
        <Title>{props.user}</Title>
      </ImageFlex>
      <UserPost src={props.post} alt='Source img'/>
    </Individual>
  )
}


export default Image;
