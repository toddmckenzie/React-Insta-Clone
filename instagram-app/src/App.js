import React, { Component } from 'react';
import './App.scss';
import testData from './testData';
import SearchBarComponent from './components/SearchBarComponent';
import PostContainer from './components/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state =  { data: [] ,
    comment: '' }
  }


  componentDidMount() {
    this.setState({ data: testData })
  }

  render() {
    return (
      <div className="App">
        <header>
            <SearchBarComponent data={this.state.data} />
         </header>
         <div>
            <PostContainer data={this.state.data}/>
          </div>
      </div>
    );
  }
}

export default App;
