import React from 'react';
import './commentSection.scss';
import Comments from './Comments';

class CommentSection extends React.Component {
  constructor(props){
    console.log(props.comments);
    super(props);
    /*
    this.state =  {
      comments: props.comments,
      textInput: ''
    }
*/
  this.state = {
    comments: props.comments,
    textInput: {
      username: '',
      text: ''
    }
  }
}
/*
componentDidMount() {
  if (this.state.comments.length < this.props.comments.length) {
    this.setState({comments: this.state.comments.push({
      username: 'DummyUser',
      text: this.state.textInput
    })})
  }
}
*/
/*
addNewComment = event => {
  event.preventDefault();
  this.setState({
    comments: this.state.comments.push({
      username: 'DummyUser',
      text: this.state.textInput
    }),
    textInput: ''
  })
};
*/

addNewComment = event => {
  event.preventDefault();
  console.log(event.target)
  this.setState({
    comments: [...this.state.comments,
      this.state.textInput]
    }
  )
}

handleChange = event => {
  event.preventDefault();
  console.log(event.target)
  //this.setState({ textInput: event.target.value })
  this.setState({
    textInput: {
      username: 'DummyUser',
      text: event.target.value
    }
  })
};


  render() {
    return (
      <div>
        {this.props.comments.map((comment, index) =>
        <Comments comment={comment} key={index}/>
        )}
        <form onSubmit={this.addNewComment}>
          <input required type='text' placeholder='Add a comment...' className='comment-here' onChange={this.handleChange}></input>
        </form>
      </div>
    )
  }
}




export default CommentSection;
