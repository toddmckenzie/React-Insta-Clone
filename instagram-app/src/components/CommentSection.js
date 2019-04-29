import React from 'react';


const CommentSection = (props) => {

  return (
    <div>
      {props.comments.map(comment =>
        <div>
          <p>comment.username</p>
          <p>comment.text</p>
        </div>
      )}
    </div>
  )
}
export default CommentSection;
