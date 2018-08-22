import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import WordForm from './Form.js';
import WordList from './WordList.js';
import WordForm from './WordForm.js';
import WordRelationList from './WordRelationList.js';
import NavBar from './NavBar.js';
import {
  Grid, Row, Col
} from 'react-bootstrap';
import {
  BrowserRouter, HashRouter, MemoryRouter, StaticRouter,
  Route,
  Link
} from 'react-router-dom';


import { Modal } from 'react-bootstrap';

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

        <NavBar />
        <Grid>          
          <Row className="show-grid" >
            <Col xs={6} md={6}>
              <div className="WordList">
                <WordList />
              </div>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={6} md={6}>
              <div className="wordForm">
                <WordForm />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default App;
