import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

class ExampleItem extends Component{
    render(){
        return(
            <div>
                <ListGroupItem
                    id={this.props.exampleId}
                    onClick={this.props.handleClickOnExample}
                    active={this.props.isActive}
                    value={this.props.exampleId}>
                    {this.props.exampleId}. {this.props.example}
                </ListGroupItem>
            </div>
        );
    }
}

export default ExampleItem;