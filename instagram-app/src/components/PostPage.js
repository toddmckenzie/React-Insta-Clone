import React from 'react';
import SearchBarComponent from './SearchBarComponent';
import PostContainer from './PostContainer';
import testData from './testData';
import './App.scss';

class PostPage extends React.Component {
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

render () {
  return (
    <div className="App">
      <header>
          <SearchBarComponent data={this.state.data} handleChange={this.handleSearchChange} filterPost={this.filterItem} />
       </header>
       <div>
          <PostContainer data={this.state.data} handleChange={this.handleChange}
          textInput={this.state.textInput}
          />
        </div>
    </div>
  );
}
}


export default PostPage
