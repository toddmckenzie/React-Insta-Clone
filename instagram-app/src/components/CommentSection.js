import React from 'react';
import './commentSection.scss';
import Comments from './Comments';
/*
class CommentSection extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     comments: props.comments,
     textInput: ''
   }
 }



addNewComment = event => {
 event.preventDefault();
 let newComment = {
   username: 'DummyUser',
   text: this.state.textInput
 }
 this.setState({
   comments: [...this.state.comments, newComment],
   textInput: ''
 })
}

handleChange = event => {
 this.setState({ [event.target.name]: event.target.value });
}


 render() {
   return (
     <div>
       {this.state.comments.map((comment) => (
         <Comments comment={comment} key={comment.text}/>
       ))}
       <form onSubmit={this.addNewComment}>
         <input required
           type='text'
           name='textInput'
           placeholder='Add a comment...'
           className='comment-here'
           onChange={this.handleChange}
           value={this.state.textInput}>
         </input>
       </form>
     </div>
   )
 }
}

*/
const CommentSection = props => {

  return (
      <div>
        {props.comments.map((comment) => (
          <Comments comment={comment} key={comment.text}/>
        ))}
        <form onSubmit={props.addNewComment}>
          <input required
            type='text'
            name='textInput'
            placeholder='Add a comment...'
            className='comment-here'
            onChange={props.handleChange}
            value={props.textInput}>
          </input>
        </form>
      </div>
  )
}

export default CommentSection;
