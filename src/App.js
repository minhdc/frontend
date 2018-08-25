import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomePage from 'general/WelcomePage';
import {
  Grid, Row, Col
} from 'react-bootstrap';
import {
  BrowserRouter, HashRouter, MemoryRouter, StaticRouter,
  Route,
  Link
} from 'react-router-dom';



class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showWordForm: false
    };
    this.toggleWordForm = this.toggleWordForm.bind(this);
  }

  toggleWordForm() {
    this.setState({
      showWordForm: !this.state.showWordForm
    });
  }

  render() {
    return (
      <div className="App">
        <WelcomePage />        
      </div>

    );
  }
}

export default App;
