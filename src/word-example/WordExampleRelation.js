import React, { Component } from 'react';
import axios from 'axios';

import {
    Grid, Row, Col, FormGroup,
    Label, Button, ControlLabel,
    FormControl, ListGroup, ListGroupItem
} from 'react-bootstrap';

import { ChipsInput } from 'mdbreact';



class Example extends Component {

    constructor(props) {
        super(props);
        this.state = {
            example_desc: '',
            keywords: '',
            source: '',
            relation: '',            
        }
        this.handleClickOnWord = this.handleClickOnWord.bind(this);
        this.handleExampleChange = this.handleExampleChange.bind(this);
        this.handleRelationChange = this.handleRelationChange.bind(this);
        this.handleSubmitExample = this.handleSubmitExample.bind(this);
        this.handleWordExampleRelation = this.handleWordExampleRelation.bind(this);
    }

    handleExampleChange(e) {

    }

    handleRelationChange(e) {

    }

    handleSubmitExample(e) {

    }

    handleClickOnWord(e) {

    }

    handleWordExampleRelation(e) {

    }




    render() {
        return (
            <div>
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
                            <FormGroup>
                                <FormControl></FormControl>
                            </FormGroup>
                            <FormGroup>

                            </FormGroup>
                        </Col>

                        <Col xs={4} md={4} lg={4}>
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
                        <Col xs={4} md={4} lg={4}>
                            <ListGroup bsClass="custom-listgroup">
                                {this.props.wordlist.map(word => (
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
                    </Row>
                    <Col xs={4} md={4} lg={4}></Col>
                    <Col xs={4} md={4} lg={4}>
                        <Row>
                            <Button block type="button" bsStyle="success" >Set Example - Concept Relation</Button>
                        </Row>
                    </Col>
                    <Col xs={4} md={4} lg={4}></Col>
                </Grid>
            </div>

        );
    }
}

export default Example;