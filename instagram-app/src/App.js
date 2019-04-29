import React, { Component } from 'react';
import './App.css';
import testData from './testData'
import TestComponent from './components/testComponent'

class App extends Component {
  constructor() {
    super();
    this.state = { data: testData
    };

  }
  render() {
    return (
      <div className="App">
        <TestComponent data={this.state.data}/>
      </div>
    );
  }
}

export default App;
