import React, { Component } from 'react';
import {FormControl, FormGroup, Button, ButtonGroup}  from 'react-bootstrap';

/**
 * WordExampleRelationSelector = RelationAction + WERelationSelector
 */

class ConceptExampleRelationSelector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="wordExampleRelationSelector">
                <FormGroup
                    controlId="wordExampleRelationSelectorControl"
                    id="wordExampleRelationSelectorForm">
                    <FormControl componentClass="select"
                        placeholder="choose a relationship"
                        value={this.props.wordExampleRelationValue}
                        onChange={this.props.handleWordExampleRelationChange}>

                        <option value='0'>Uncategorized</option>
                        <option value='1'>Same Concept & subconcept</option>
                        <option value='2'>Related Concept</option>
                        <option value='3'>Action</option>
                        <option value='4'>Doer of Action</option>
                        <option value='5'>Receiver of Action</option>
                        <option value='6'>Being described by</option>
                        <option value='7'>Describing</option>
                        <option value='8'>Idioms & fixed expression</option>
                        <option value='9'>Related Phrases</option>

                    </FormControl>
                </FormGroup>
            </div>
        );
    }
}

class WordExampleRelationActionButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="relationActionButton">
                <ButtonGroup>
                    <Button
                        bsStyle="info"
                        onClick={this.props.handleUpdateWordExampleRelation}
                        disabled={this.props.isUpdateButtonDisabled}>Update</Button>
                    <Button
                        bsStyle="success"
                        onClick={this.props.handleSetWordExampleRelation}
                        disabled={this.props.isSetButtonDisabled}>Set</Button>
                    <Button
                        bsStyle="danger"
                        onClick={this.props.handleDeleteWordExampleRelation}
                        disabled={this.props.isDeleteButtonDisabled}>Delete</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export { WordExampleRelationActionButton, ConceptExampleRelationSelector };