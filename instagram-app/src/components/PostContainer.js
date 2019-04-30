import React from 'react';
import CommentSection from './CommentSection';
import Image from './Image';
import PropTypes from 'prop-types';
import './PostContainer.scss';
import likes from './images/heart.png';
import comment from './images/comment.png';



const PostContainer = props => {

  return (
    <div>
      {props.data.map((item, index) =>
        <div className="each-container">
          <Image img={item.thumbnailUrl} post={item.imageUrl} user={item.username} key={item.timestamp} />
          <p><img src={likes} alt="likes" className='likes'/>
          <img src={comment} alt="comment" className="comment" /></p>
          <p className="liked-by" >Liked by {item.likes} others</p>
          <CommentSection comments={item.comments} key={index} />
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
