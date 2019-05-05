import React from 'react';
import CommentSection from './CommentSection';
import Image from './Image';
import PropTypes from 'prop-types';
import './PostContainer.scss';
import LikesComponent from './LikesComponent';
import styled from 'styled-components';


const EachContainer = styled.div`
  width: 640px;
  border: 1px solid lightgray;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 30px;
  background-color: white;
`

const PostContainer = props => {
  return (
    <>
     {props.data.map((item, index) =>
       <EachContainer key={Math.random()}>
         <Image img={item.thumbnailUrl} post={item.imageUrl} user={item.username} key={item.timestamp} />
         <LikesComponent likes={item.likes} key={item.likes * 100}/>
         <CommentSection comments={item.comments}
         key={item.username}
         handleChange={props.handleChange}
         />
        </EachContainer>
      )}
    </>
  )

}

PostContainer.propTypes = {
    object: PropTypes.shape({
        comments: PropTypes.object,
        likes: PropTypes.number,
        imageUrl: PropTypes.string,
        timestamp: PropTypes.string,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string
    })
};

export default PostContainer;
