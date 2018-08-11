import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import WordForm from './Form.js';
import WordList from './WordList.js';
import WordForm from './WordForm.js';

import {Modal} from 'react-bootstrap';

class App extends Component {

  constructor(props,context){
    super(props,context);
    this.state={
      showWordForm: false
    };
    this.toggleWordForm = this.toggleWordForm.bind(this);
  }

  toggleWordForm(){
    this.setState({
      showWordForm: !this.state.showWordForm
    });
  }

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

        <button onClick={this.toggleWordForm}> WordForm
          </button>
        <div className="static-modal">
        <Modal show={this.state.showWordForm} onHide={this.toggleWordForm}>
          <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="WordForm">
              <WordForm/>
            </div>    
          </Modal.Body> 
        </Modal>
        </div>
        
        <div className="WordList">
          <WordList/>
        </div> 
      </div>
            
    );
  }
}

export default App;
