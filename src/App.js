import React, { Component } from 'react';
import logo from './logo.svg';
import Display from './Display.js';
import './App.css';

class App extends Component {

  state = {
    displayValue: 0,
    firstNum: null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">QuickSnax</h1>
          <p><i>If we don't have it, you don't need it.</i></p>
        </header>
        <Display inputValue={this.state.displayValue} />
      </div>
    );
  }
}

export default App;
