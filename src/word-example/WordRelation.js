import React, { Component } from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';
import {
    Grid, Row, Col, FormGroup,
    Label, Button,
    FormControl, ListGroup, ListGroupItem
} from 'react-bootstrap';

import './word-example.css';
import Example from './WordExampleRelation';

class WordExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            word1_id: '',
            word2_id: '',
            word_relation: '',
        };
        this.handleWordRelation = this.handleWordRelation.bind(this);
        this.handleWordRelationChange = this.handleWordRelationChange.bind(this);
        this.handleClickOnWord = this.handleClickOnWord.bind(this);
    }

    handleClickOnWord(e, isParent) {
        isParent ? this.setState({ word2_id: e.target.value }) : this.setState({ word1_id: e.target.value })       
    }

    checkCurrentRelation(word1_id, word2_id) {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/wordrelation/'+word1_id;
        axios.get(uri)
            .then(res => {
                const wordRelation = res.data;
                //check the existence of relation
            }).catch(e => {
                console.log(e);
            })
    }

    handleWordRelationChange(e) {
        this.setState({
            word_relation: e.target.value
        });
    }

    handleWordRelation(e) {
        const wordRelation = new FormData();
        wordRelation.append('word1_id', this.state.word1_id);
        wordRelation.append('word2_id', this.state.word2_id);
        wordRelation.append('relation', this.state.word_relation);

        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/pvoexample/api/v1/wordrelation",
            data: wordRelation,
        }).then((res) => {
            console.log(res);

        }).catch(err => {                        
            console.log(err);
        })
        //reset
        this.setState({
            word_1: '',
            word_2: '',
            word_relation: '',
        });
    }

    render() {
        return (
            <div>
                <div id="wordRelation">
                    <Grid>
                        <Row bsClass="col-centered">
                            <Col xs={4} md={4} lg={4}>
                                <Label bsStyle="success">Child Concept</Label>
                            </Col>
                            <Col xs={4} md={4} lg={4}>
                                <Label> Concept - Concept Relation</Label>
                            </Col>
                            <Col xs={4} md={4} lg={4}>
                                <Label bsStyle="danger">Parent Concept</Label>
                            </Col>
                        </Row>

                        <Row bsClass="col-centered">
                            <Col xs={4} md={4} lg={4} >
                                <ListGroup bsClass="custom-listgroup">
                                    {this.props.wordlist.map(word => (
                                        <div key={word.id}>
                                            <ListGroupItem
                                                onClick={(e, isParent) => this.handleClickOnWord(e, isParent = false)}
                                                value={word.id}>
                                                {word.word}
                                            </ListGroupItem>
                                        </div>
                                    ))}
                                </ListGroup>
                            </Col>

                            <Col xs={4} md={4} lg={4} >
                                <Row>
                                    <FormGroup controlId="wordRelationControlSelect">
                                        <FormControl componentClass="select"
                                            placeholder="choose a relationship"
                                            onChange={this.handleWordRelationChange}>
                                            <option value={6}>Undefined</option>
                                            <option value={1}>General Association</option>
                                            <option value={2}>Of the same concept cluster</option>
                                            <option value={3}>A part of</option>
                                            <option default value={4}>A type of</option>
                                            <option value={5}>Describing</option>
                                        </FormControl>
                                    </FormGroup>
                                </Row>
                            </Col>

                            <Col xs={4} md={4} lg={4} >
                                <ListGroup bsClass="custom-listgroup">
                                    {this.props.wordlist.map(word => (
                                        <div key={word.id}>
                                            <ListGroupItem
                                                onClick={(e, isParent) => this.handleClickOnWord(e, isParent = true)}
                                                value={word.id}>
                                                {word.word}
                                            </ListGroupItem>
                                        </div>
                                    ))}
                                </ListGroup>
                            </Col>
                        </Row>
                        <Col xs={4} md={4} lg={4}></Col>
                        <Col xs={4} md={4} lg={4}>
                            <Row>
                                <Button block type="button" bsStyle="success" onClick={this.handleWordRelation} >Set Word Relation</Button>
                            </Row>
                        </Col>
                        <Col xs={4} md={4} lg={4}></Col>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default WordExample;