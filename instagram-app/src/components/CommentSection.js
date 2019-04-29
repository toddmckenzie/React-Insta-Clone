import React from 'react';
import './commentSection.scss';


const CommentSection = (props) => {

  return (
    <div>
      {props.comments.map((comment, index) =>
        <div className="flex">
          <p key={`${comment.username}_${index}`}>{comment.username}</p>
          <p key={index}>{comment.text}</p>
        </div>
      )}
      <input value="Add a comment..."></input>
    </div>
  )
}




export default CommentSection;
