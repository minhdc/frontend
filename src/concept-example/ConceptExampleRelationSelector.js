import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';

/**
 * WordExampleRelationSelector = RelationAction + WERelationSelector
 */

class ConceptExampleRelationSelector extends Component {
    render() {
        return (
            <div id="conceptExampleRelationSelector">
                <FormGroup
                    controlId="conceptExampleRelationSelectorControl"
                    id="conceptExampleRelationSelectorForm">
                    <FormControl componentClass="select"
                        placeholder="choose a relationship"
                        value={this.props.conceptExampleRelationValue}
                        onChange={this.props.handleConceptExampleRelationChange}>

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

//need to change to create - update relation 
class ConceptExampleRelationActionButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="relationActionButton">                
                    <Button
                        block
                        bsStyle="success"
                        onClick={this.props.handleSetWordExampleRelation}
                        disabled={this.props.isSetExampleConceptButtonDisabled}>Set</Button>
                
            </div>
        );
    }
}

export { ConceptExampleRelationActionButton, ConceptExampleRelationSelector };