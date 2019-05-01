import React, { Component } from 'react';
import testData from './testData';
import PostPage from './components/PostPage'


class App extends Component {
  constructor() {
    super();
    this.state =  { data: [] ,
    comment: '',
    filtered: '',
    textInput: '',
    comments: '',
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
    this.setState({ data: testData }) //if searched item isn't identical then the regular list stays up there.
    this.state.data.filter((item, index) => {
      if (this.state.filtered === item.username) {
        this.setState({ data: [item] });
      }
  })
}
  addNewComment = event => {
   event.preventDefault();
   console.log('hi')
   console.log(this.state.input);
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

  addLikes = event => { //can't get to update.
    event.preventDefault();
    let newLikes = parseInt(event.target.name);
    let likesPlusOne = newLikes + 1;
    console.log(this.state.likes)
    this.setState({ likes: likesPlusOne})

    //this.setState({ likes: this.state.likes })
  }

  render() {
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
