import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';


/**
 * RelationSelector = RelationActionButton + RelationSelector
 */

class RelationSelector extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="relationSelector">
                <FormGroup
                    controlId="relationSelectorControl"
                    id="relationSelectorForm">
                    <FormControl componentClass="select"
                        placeholder="choose a relationship"
                        value={this.props.relationValue}
                        onChange={this.props.handleWordRelationChange}>

                        <option value='6'>Undefined</option>
                        <option value='1'>General Association</option>
                        <option value='2'>Of the same concept cluster</option>
                        <option value='3'>A part of</option>
                        <option value='4'>A type of</option>
                        <option value='5'>Describing</option>

                    </FormControl>
                </FormGroup>
            </div>
        );
    }
}

class RelationActionButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="relationActionButton">
                {this.props.wordRelationAction ? (
                    <Button
                        block
                        type="button"
                        bsStyle="primary"
                        onClick={this.props.handleSetWordRelation}>
                        Set WordRelation</Button>
                ) : (
                        <Button
                            block
                            type="button"
                            bsStyle="info"
                            onClick={this.props.handleUpdateWordRelation}>
                            Update WordRelation</Button>
                    )}
            </div>
        );
    }
}



export { RelationActionButton, RelationSelector };
