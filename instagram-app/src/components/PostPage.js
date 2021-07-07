import React from 'react';
import SearchBarComponent from './SearchBarComponent';
import PostContainer from './PostContainer';
import testData from './testData';
import './App.scss';
import PropTypes from 'prop-types';


class PostPage extends React.Component {
  constructor() {
      super();
      this.state =  { data: [] ,
      comment: '',
      filtered: ''
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

render () {
  return (
    <div className="App">
      <header>
          <SearchBarComponent data={this.state.data} handleChange={this.handleSearchChange} filterPost={this.filterItem} />
       </header>
       <div>
          <PostContainer  data={this.state.data} handleChange={this.handleChange}
          textInput={this.state.textInput}
          />
        </div>
    </div>
  );
}
}

PostPage.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  })
}


export default PostPage
