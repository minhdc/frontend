import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class ExampleForm extends Component {
    handleInputChange = (e) => {        
        this.props.onChange(e.target.id,e.target.value);        
    }


    render() {
        const bindInput = propPath => ({
            value: this.props[propPath],
            onChange: (e) => {
                propPath = e.target.value
            }
        });

        return (
            <div>
                <form>
                    <FormGroup controlId="exampleDesc">
                        <ControlLabel >Example Description</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            placeholder="describe your example(s) here"
                            onChange={this.handleInputChange}
                            value={this.props.exampleDesc}
                            style={{ height: 160 }}>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="keywords">
                        <ControlLabel>Keywords</ControlLabel>
                        <FormControl
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.props.keywords}
                            placeholder="key1, key2, key3, ..."
                            label="keyword"></FormControl>
                    </FormGroup>
                    <FormGroup controlId="source">
                        <ControlLabel>Source</ControlLabel>
                        <FormControl
                            onChange={this.handleInputChange}
                            value={this.props.source}
                            label="source"
                        ></FormControl>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default ExampleForm;