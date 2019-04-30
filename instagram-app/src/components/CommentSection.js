import React from 'react';
import './commentSection.scss';
import Comments from './Comments';

class CommentSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: {
        text: props.comment,
        input: 'Add a comment...'
      }
    }


  }

  addnewComment = event => {
    this.setState({
      username: 'Todd',
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, index) =>
        <Comments comment={comment} index={index}/>
        )}
        <input required type='text' value={this.input} className='comment-here' onSubmit={this.addComment}></input>
      </div>
    )
  }
}




export default CommentSection;
