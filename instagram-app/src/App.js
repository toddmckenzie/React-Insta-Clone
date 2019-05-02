import React from 'react';
import PostPage from './components/PostPage'
import withAuthenticate from './authentication/withAuthenticate'
/*
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
*/

const ComponentFromWithAuthenticate = withAuthenticate(PostPage);

const App = () => {
  return (
    <ComponentFromWithAuthenticate />
  )
}

export default App;
