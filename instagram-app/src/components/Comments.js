import React from 'react';
import './commentSection.scss';
import styled from 'styled-components';

const Flexed = styled.div`
  display: flex;
  font-size: 14px;
  width: 640px;
  line-height: 16px;`

const UserName = styled.p`
font-weight: bold;
padding-right: 10px;
padding-left: 15px;`


const Comments = props => {
  return (
    <Flexed>
      <UserName>{props.comment.username}</UserName>
      <p key={props.index}>{props.comment.text}</p>
    </Flexed>
  )
}

export default Comments;
