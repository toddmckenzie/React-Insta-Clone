import React from 'react';
import CommentSection from './CommentSection';
import Image from './Image';
import PropTypes from 'prop-types';
import './PostContainer.scss'

const PostContainer = props => {

  return (
    <div>
      {props.data.map((item, index) =>
        <div>
          <Image img={item.thumbnailUrl} post={item.imageUrl} user={item.username} key={item.timestamp} />
          <p>{item.likes}</p>
          <CommentSection comments={item.comments}/>
        </div>

      )}
    </div>
  )
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.array,

    })
  )
}

export default PostContainer;
