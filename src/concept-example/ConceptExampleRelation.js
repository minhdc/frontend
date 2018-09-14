import React, { Component } from 'react';
import {
    Grid, Row, Col, Button    
} from 'react-bootstrap';

import {
    ConceptExampleRelationSelector,
    ConceptExampleRelationActionButton
} from './ConceptExampleRelationSelector';
import ExampleForm from '../example/ExampleForm.js';
import ConceptList from '../concept/ConceptList.js';


class ConceptExampleRelation extends Component {

    handleClickOnWord = (e) => {
        this.props.clickOnConcept(e.target.value);
    }

    handleInputChange = (id,text) => {        
        this.props.handleExampleInputChange(id,text);
    }

    handleSetWordExampleRelation = (e) => {
        this.props.handleSubmitWordExampleRelation();        
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="conceptExampleRelation">
                <Grid>
                    <Row id="firstRow">
                        <Col xs={4} md={4} lg={4}>
                            <Row>
                                <ExampleForm 
                                    onChange = {this.handleInputChange}
                                    exampleDesc = {this.props.exampleDesc}
                                    keywords = {this.props.keywords}
                                    source = {this.props.source}/>
                            </Row>
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <Row>
                                <ConceptExampleRelationSelector
                                    conceptExampleRelationValue={this.props.conceptExampleRelationValue}
                                    handleConceptExampleRelationChange={this.props.handleConceptExampleRelationChange} />
                            </Row>
                            <Row>
                                <ConceptExampleRelationActionButton
                                    handleSetWordExampleRelation = {this.handleSetWordExampleRelation}
                                    isSetExampleConceptButtonDisabled = {this.props.isSetExampleConceptButtonDisabled} />
                            </Row>
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <Row>
                                <Button
                                    block
                                    bsStyle="danger">
                                    {this.props.selectedConcept}
                                </Button>
                            </Row>
                            <Row>
                                <ConceptList
                                    wordList={this.props.wordList}
                                    handleClickOnWord={this.handleClickOnWord} />
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default ConceptExampleRelation;