import React, { Component } from 'react';
import testData from './testData';
import PostPage from './components/PostPage'


class App extends Component {
  constructor() {
    super();
    this.state =  { data: [] ,
    comment: '',
    filtered: '',
    }
  }

  componentDidMount() {
    this.setState({ data: testData })
  }

  handleSearchChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  filterItem = event => {
    event.preventDefault();
    if(this.state.filtered === '') {
      this.setState({ data: testData })
    } else {
    const updatedData = this.state.data.filter(item => item.username === this.state.filtered)
      this.setState({ data: updatedData })
    }
}


/*
  addNewComment = event => {
   event.preventDefault();
   let newComment = {
     username: 'DummyUser',
     text: this.state.textInput
   }

   this.setState({
     comments: [...this.state.data.comments, newComment],
     textInput: ''
   })
 }
 */
/*
  handleChange = event => {
   this.setState({ [event.target.name]: event.target.value });
  }

  addLikes = event => { //can't get to update.
    event.preventDefault();
    let newLikes = parseInt(event.target.name);
    let likesPlusOne = newLikes + 1
    console.log('hi')
    console.log(this.state.likes)
    console.log('ho')
    this.setState({ likes: likesPlusOne})

    //this.setState({ likes: this.state.likes })
  }
*/
  render() {
    console.log(this.state.data)
    return (
      <PostPage data={this.state.data} handleSearchChange={this.handleSearchChange}
      filterItem={this.filterItem} addNewComment={this.addNewComment}
      handleChange={this.handleChange} textInput={this.state.textInput}
      addLikes={this.addLikes}
      />
    )
  }
}


export default App;
