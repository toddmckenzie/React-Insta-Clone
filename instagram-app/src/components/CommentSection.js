import React from 'react';


const CommentSection = (props) => {

  return (
    <div>
      {props.comments.map(comment =>
        <div className="flex">
          <p>{comment.username}</p>
          <p>{comment.text}</p>
        </div>
      )}
      <input value="Add a comment..."></input>
    </div>
  )
}
export default CommentSection;
