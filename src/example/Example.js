import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class Example extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <FormGroup controlId="formControlExampleDescription">
                        <ControlLabel>Example Description</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            placeholder="describe your example(s) here"
                            style={{height:160}}>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlKeyWord">
                        <ControlLabel>Keywords</ControlLabel>
                        <FormControl                            
                            type="text"
                            placeholder="key1, key2, key3, ..."></FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlSource">
                        <ControlLabel>Source</ControlLabel>
                        <FormControl                            
                            type="text"
                        ></FormControl>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default Example;