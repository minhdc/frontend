import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import ExampleItem from './ExampleItem';

class ExampleList extends Component{
    constructor(props){
        super(props);
    } 

    render() {
        return(
            <div id="exampleList">
                <ListGroup bsClass="custom-listgroup">
                    {this.props.exampleList.map(example => (
                        <div key={example.id}>
                            <ExampleItem
                                exampleId={example.id}
                                handleClickOnExample={this.props.handleClickOnExample}
                                isActive={false}
                                example={example.example_desc}
                            >{example.id}</ExampleItem>
                        </div>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default ExampleList;