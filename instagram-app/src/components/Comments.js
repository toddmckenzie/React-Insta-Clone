import React from 'react';
import './commentSection.scss';

const Comments = props => {
  return (
    <div className="flex">
      <p className="user-name">{props.comment.username}</p>
      <p key={props.index}>{props.comment.text}</p>
    </div>
  )
}

export default Comments;
