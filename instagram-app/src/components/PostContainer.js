import React from 'react';
import CommentSection from './CommentSection';
import Image from './Image';


const PostContainer = props => {

  return (
    <div>
      {props.data.map(item =>
        <div>
          <Image img={item.thumbnailUrl} post={item.imageUrl} user={item.username} />
          <CommentSection comments={item.comments} />
        </div>

      )}
    </div>
  )
}

export default PostContainer;
