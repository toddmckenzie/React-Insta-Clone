import React from 'react';
import './PostContainer.scss';
import likes from './images/heart.png';
import comment from './images/comment.png';

class LikesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    }

}

addLikes = event => {
  event.preventDefault();
  let newLikes = this.state.likes + 1;
  this.setState({ likes: newLikes })
  }


  render() {
    return (
      <div>
        <p>
        <img src={likes} alt="likes" className='likes' onClick={this.addLikes} />
        <img src={comment} alt="comment" className="comment" />
        </p>
        <p className="liked-by">Liked by {this.state.likes} others</p>
      </div>
      )
  }

}

export default LikesComponent;
