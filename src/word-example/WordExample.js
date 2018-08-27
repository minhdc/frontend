import React, { Component } from 'react';
import NavBar from 'general/NavBar';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';
import {
    Grid, Row, Col, FormGroup,
    Label, Button, ControlLabel,
    FormControl, ListGroup, ListGroupItem
} from 'react-bootstrap';

import './word-example.css';

class WordExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wordlist: [],
            word_1: '',
            word_2: '',
            word_relation: '',
        };
        this.getWordList = this.getWordList.bind(this);
        this.handleWordRelation = this.handleWordRelation.bind(this);
        this.handleRelationChange = this.handleRelationChange.bind(this);
        this.handleClickOnWord = this.handleClickOnWord.bind(this);
    }

    onChange = (e, { newValue }) => {
        this.setState({
            word_relation: newValue
        });
    }

    getWordList() {
        axios.get('http://127.0.0.1:8000/pvoexample/api/v1/words')
            .then(res => {
                const wordlist = res.data;
                this.setState({ wordlist: wordlist });
            }).catch(e => {
                console.log(e);
            })
    }


    componentDidMount() {
        this.getWordList();
    }

    handleClickOnWord(e, isParent) {
        isParent ? this.setState({ word_2: e.target.value }) : this.setState({ word_1: e.target.value })
    }

    handleRelationChange(e) {
        this.setState({
            word_relation: e.target.value
        });
    }

    handleWordRelation(e) {
        //submit relation

        const wordRelation = new FormData();
        wordRelation.append('word1', this.state.word_1);
        wordRelation.append('word2', this.state.word_2);
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
    }

    render() {
        const bindInput = statePath => ({
            value: this.state[statePath],
            onChange: (e) => this.setState({
                [statePath]: e.target.value
            })
        });
        return (
            <div>
                <NavBar />
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
                                    {this.state.wordlist.map(word => (
                                        <div key={word.id}>
                                            <ListGroupItem
                                                onClick={(e, isParent) => this.handleClickOnWord(e, isParent = false)}
                                                value={word.word}>
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
                                            onChange={this.handleRelationChange}>
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
                                    {this.state.wordlist.map(word => (
                                        <div key={word.id}>
                                            <ListGroupItem
                                                onClick={(e, isParent) => this.handleClickOnWord(e, isParent = true)}
                                                value={word.word}>
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
                                <Button block type="button" bsStyle="success" onClick={this.handleWordRelation}>Set Relation</Button>
                            </Row>
                        </Col>
                        <Col xs={4} md={4} lg={4}></Col>
                    </Grid>
                </div>

                <div id="wordExampleRelation">
                    <Grid>
                        <Row bsClass="col-centered">
                            <Col xs={4} md={4} lg={4}>
                                <Label bsStyle="success">Example</Label>
                            </Col>
                            <Col xs={4} md={4} lg={4}>
                                <Label> Example - Concept Relation</Label>
                            </Col>
                            <Col xs={4} md={4} lg={4}>
                                <Label bsStyle="danger">Linked Concept</Label>
                            </Col>
                        </Row>

                        <Row bsClass="col-centered">
                            <Col xs={4} md={4} lg={4} >
                                <FormGroup controlId="formControlsTextarea">                                    
                                    <FormControl componentClass="textarea" placeholder="Enter examples here" rows={12} />
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4} lg={4} >
                                <Row>
                                    <FormGroup controlId="wordRelationControlSelect">
                                        <FormControl componentClass="select"
                                            placeholder="choose a relationship"
                                            onChange={this.handleRelationChange}>
                                            <option value={12}>Same concept & Subconcept</option>
                                            <option value={2}>Related Concept</option>
                                            <option value={3}>Doer of Action</option>
                                            <option value={4}>Receiver Of Action</option>
                                            <option value={5}>Action</option>
                                            <option value={6}>Beging described by</option>
                                            <option value={7}>Describing</option>
                                            <option value={8}>Idioms & fixed expression</option>
                                            <option value={9}>Related phrases</option>
                                            <option value={10}>Pun/word play</option>
                                            <option value={11}>Other example</option>
                                            <option value={1}>Temporarily uncategorized</option>
                                        </FormControl>
                                    </FormGroup>
                                </Row>
                            </Col>
                            <Col xs={4} md={4} lg={4} >
                                <ListGroup bsClass="custom-listgroup">
                                    {this.state.wordlist.map(word => (
                                        <div key={word.id}>
                                            <ListGroupItem
                                                onClick={(e, isParent) => this.handleClickOnWord(e, isParent = true)}
                                                value={word.word}>
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
                                <Button block type="button" bsStyle="success" onClick={this.handleWordRelation}>Set Relation</Button>
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