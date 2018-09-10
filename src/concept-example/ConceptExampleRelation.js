import React, { Component } from 'react';
import {
    Grid, Row, Col, FormGroup,
    Label, Button, ControlLabel,
    FormControl, ListGroup, ListGroupItem
} from 'react-bootstrap';

import { ConceptExampleRelationSelector } from './ConceptExampleRelationSelector';
import Example from '../example/Example.js';
import ConceptList from '../concept/ConceptList.js';


class ConceptExampleRelation extends Component {

    constructor(props) {
        super(props);        
    }    

    handleClickOnWord = (e) => {
        this.props.clickOnConcept(e.target.value);
    }

    componentDidMount(){
       
    }

    render() {
        return (
            <div>                
                <Example/>
                <ConceptExampleRelationSelector
                    wordExampleRelationValue = {this.props.wordExampleRelationValue}
                    handleWordExampleRelationChange = {this.props.handleWordExampleRelationChange}/>
                <ConceptList
                    wordList={this.props.wordList}
                    handleClickOnWord={this.handleClickOnWord}/>
            </div>
        );
    }

}

export default ConceptExampleRelation;