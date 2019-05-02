import React from 'react';
import Comments from './Comments';
import styled from 'styled-components'

const CommentHere = styled.input`
  width: 616px;
  height: 50px;
  padding-left: 20px;
  font-size: 16px;
  color: gray;`

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
         <Comments comment={comment} />
       ))}
       <form onSubmit={this.addNewComment}>
         <CommentHere required
           type='text'
           name='textInput'
           placeholder='Add a comment...'
           className='comment-here'
           onChange={this.handleChange}
           value={this.state.textInput}>
         </CommentHere>
       </form>
     </div>
   )
 }
}
/*


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
            value={props.textInput}
            key={props.timestamp}
            >
          </input>
        </form>
      </div>
  )
}
*/
export default CommentSection;
