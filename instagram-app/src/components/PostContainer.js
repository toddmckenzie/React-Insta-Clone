import React from 'react';
import CommentSection from './CommentSection';
import Image from './Image';
import PropTypes from 'prop-types';
import './PostContainer.scss';
import LikesComponent from './LikesComponent';



const PostContainer = props => {

  return (
    <>
     {props.data.map((item, index) =>
       <div className="each-container">
         <Image img={item.thumbnailUrl} post={item.imageUrl} user={item.username} key={item.timestamp} />
         <LikesComponent likes={item.likes} key={item.likes * 100}/>
         <CommentSection comments={item.comments}
         key={item.username}
         handleChange={props.handleChange}
         />
        </div>
      )}
    </>
  )
}




export default PostContainer;
