import React, { Component } from 'react';
import './App.scss';
import testData from './testData';
import SearchBarComponent from './components/SearchBarComponent';
import PostContainer from './components/PostContainer';

class App extends Component {
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

  fitlerItem = event => {
    event.preventDefault();
    this.setState({ data: testData })
    this.state.data.filter((item, index) => {
      if (this.state.filtered === item.username) {
        this.setState({ data: [item] })
      }
  })
}

  render() {
    console.log(this.state.filtered + ' here is this.state.filtered')
    return (
      <div className="App">
        <header>
            <SearchBarComponent data={this.state.data} handleChange={this.handleSearchChange} filterPost={this.fitlerItem}/>
         </header>
         <div>
            <PostContainer data={this.state.data}/>
          </div>
      </div>
    );
  }
}

export default App;
