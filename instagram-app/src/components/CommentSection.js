import React from 'react';
import './commentSection.scss';
import Comments from './Comments';

class CommentSection extends React.Component {
 constructor(props){
   console.log(props.comments);
   super(props);

   this.state = {
     comments: props.comments,
     textInput: ''
   }
 }


addNewComment = event => {
 event.preventDefault();
 var newComment = {
   username: 'DummyUser',
   text: this.state.textInput
 }
 this.setState({
   comments: [...this.state.comments, newComment],
   textInput: ""
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
           name="textInput"
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




export default CommentSection;
