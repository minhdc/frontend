import React, { Component } from 'react';
import {ListGroupItem } from 'react-bootstrap';

class ConceptItem extends Component{
    render(){
        return(
            <div>
                <ListGroupItem
                    id={this.props.wordId}
                    onClick={this.props.handleClickOnWord}
                    active={this.props.isActive}
                    value={this.props.wordId}>
                    {this.props.wordId}. {this.props.word}
                </ListGroupItem>
            </div>
        );
    }
}

export default ConceptItem;
