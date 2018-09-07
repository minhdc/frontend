import React, { Component } from 'react';
import axios from 'axios';

import {
    Grid, Row, Col, Button,Label
} from 'react-bootstrap';

import WordList from '../word/WordList';
import { RelationActionButton, RelationSelector } from "./RelationSelector";


class WordRelation extends Component {

    constructor(props) {
        super(props);
        this.handleClickOnChild = this.handleClickOnChild.bind(this);
        this.handleClickOnParent = this.handleClickOnParent.bind(this);
    }

    handleClickOnChild(e){
        this.props.clickOnChild(e.target.value);
        console.log("wordrelation class : child clicked"+e.target.value);
    }

    handleClickOnParent(e){
        this.props.clickOnParent(e.target.value);
        console.log("wordrelation class : parent clicked"+e.target.value);
    }

    render() {
        return (
            <div id='wordRelation'>
                <Grid>

                    <Row id="firstRow">
                        <Col xs={4} md={4} lg={4} >
                            <Row>
                                <Button
                                    block
                                    bsStyle="success">
                                    {this.props.selectedChildConcept}
                                    {this.props.selectedChild}
                                </Button>
                            </Row>
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <RelationSelector
                                relationValue={this.props.relationValue}
                                handleWordRelationChange={this.props.handleWordRelationChange}
                            />
                        </Col>
                        <Col xs={4} md={4} lg={4} >
                            <Row>
                                <Button
                                    block
                                    bsStyle="danger">
                                    {this.props.selectedParentConcept}
                                    {this.props.selectedParent}
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                    

                    <Row id="secondRow">
                        <Col xs={4} md={4} lg={4} >
                            <Row>
                                <WordList
                                    wordList={this.props.wordList}
                                    isParent={false}
                                    handleClickOnWord={this.handleClickOnChild}
                                />
                            </Row>
                            <Row >
                                <Label
                                    block
                                    bsStyle="success">
                                    Child Concept
                                </Label>
                            </Row>
                        </Col>

                        <Col xs={4} md={4} lg={4} >
                            <Row>
                                <RelationActionButton
                                    wordRelationAction={this.props.wordRelationAction}
                                    handleSetWordRelation={this.props.handleSetWordRelation}
                                    handleUpdateWordRelation={this.props.handleUpdateWordRelation}
                                />
                            </Row>
                        </Col>

                        <Col xs={4} md={4} lg={4} >
                            <Row>
                                <WordList
                                    wordList={this.props.wordList}
                                    isParent={true}
                                    handleClickOnWord={this.handleClickOnParent}
                                />
                            </Row>
                            <Row>
                                <Label
                                    block
                                    bsStyle="danger">
                                    Parent Concept
                                </Label>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
    /*
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
                                <Col xs={4} md={4} lg={4}>
                                    <div id="childConcept">
    
                                    </div>
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                    <div id="parentConcept">
    
                                    </div>
                                </Col>
                            </Row>
    
                            <Row bsClass="col-centered">
                                <Col xs={4} md={4} lg={4} >
                                    <ListGroup bsClass="custom-listgroup">
                                        {this.props.wordlist.map(word => (
                                            <div key={word.id}>
                                                <ListGroupItem
                                                    onClick={(e, isParent) => this.handleClickOnWord(e, isParent = false)}
                                                    value={word.id}
                                                    active={this.state.child_concept_active}>
                                                    {word.word}
                                                </ListGroupItem>
                                            </div>
                                        ))}
                                    </ListGroup>
                                </Col>
    
                                <Col xs={4} md={4} lg={4} >
                                    <Row>
                                        <FormGroup
                                            controlId="wordRelationControlSelect"
                                            id="wordRelationControlSelect">
                                            <FormControl componentClass="select"
                                                placeholder="choose a relationship"
                                                value={this.state.word_relation}
                                                onChange={this.handleWordRelationChange}
                                            >
                                                <option value='6'>Undefined</option>
                                                <option value='1'>General Association</option>
                                                <option value='2'>Of the same concept cluster</option>
                                                <option value='3'>A part of</option>
                                                <option value='4'>A type of</option>
                                                <option value='5'>Describing</option>
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
                                    {this.state.word_relation_status ? (
                                        <Button block type="button" bsStyle="success" onClick={this.handleWordRelation} >Set Word Relation</Button>
                                    ) : (
                                            <Button block type="button" bsStyle="info" onClick={this.handleUpdateWordRelation} >Update Word Relation</Button>
                                        )}
                                </Row>
                            </Col>
                            <Col xs={4} md={4} lg={4}></Col>
                        </Grid>
                    </div>
                    <div id="successModal">
                        <Modal
                            {...this.props}
                            show={this.state.showSuccessModal}                        
                            onHide={this.hideSuccessModal}
                        >
                            <Modal.Dialog>
                                <ModalHeader closeButton>
                                    <ModalTitle>Set/Update Word Relation </ModalTitle>
                                </ModalHeader>
    
                                <ModalBody>Success!</ModalBody>
    
                                <ModalFooter>
                                    <Button bsClass="danger">Close</Button>
                                </ModalFooter>
                            </Modal.Dialog>
                        </Modal>
                    </div>
                </div>
            );
        }
        */
}

export default WordRelation;