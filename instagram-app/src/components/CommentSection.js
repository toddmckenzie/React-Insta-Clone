import React from 'react';
import './commentSection.scss';


const CommentSection = (props) => {

  return (
    <div>
      {props.comments.map((comment, index) =>
        <div className="flex">
          <p key={`${comment.username}_${index}`} className="user-name">{comment.username}</p>
          <p key={index}>{comment.text}</p>
        </div>
      )}
      <input value="Add a comment..." className="comment-here"></input>
    </div>
  )
}




export default CommentSection;
