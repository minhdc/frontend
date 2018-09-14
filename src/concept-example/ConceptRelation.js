import React, { Component } from 'react';

import {
    Grid, Row, Col, Button,Label
} from 'react-bootstrap';

import ConceptList from '../concept/ConceptList';
import { RelationActionButton, ConceptRelationSelector } from "./ConceptRelationSelector";


class ConceptRelation extends Component {   

    handleClickOnChild = (e) => {
        this.props.clickOnChild(e.target.value);        
    }

    handleClickOnParent = (e) => {
        this.props.clickOnParent(e.target.value);        
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
                            <ConceptRelationSelector
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
                                <ConceptList
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
                                    handleSetWordRelation={this.props.handleSetWordRelation}
                                    handleUpdateWordRelation={this.props.handleUpdateWordRelation}
                                    handleDeleteWordRelation={this.props.handleDeleteWordRelation}
                                    isSetButtonDisabled= {this.props.isSetButtonDisabled}
                                    isUpdateButtonDisabled = {this.props.isUpdateButtonDisabled}
                                    isDeleteButtonDisabled = {this.props.isDeleteButtonDisabled}
                                />
                            </Row>
                        </Col>

                        <Col xs={4} md={4} lg={4} >
                            <Row>
                                <ConceptList
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
}

export default ConceptRelation;