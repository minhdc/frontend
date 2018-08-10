import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import WordForm from './Form.js';
import WordList from './WordList.js';
import WordForm from './WordForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>  
        <div className="WordForm">
          <WordForm/>
          </div>     
        <div className="WordList">
          <WordList/>
        </div> 
      </div>
            
    );
  }
}

export default App;
