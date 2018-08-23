import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarProps } from 'react-bootstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">PVO</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/words">
                            Concept
                        </NavItem>
                        <NavItem eventKey={2} href="/wordexample">
                            Concept-Example
                        </NavItem>
                        <NavItem eventKey={3} href="/example">
                            Example Search
                        </NavItem>
                        <NavItem eventKey={4} href="/vocabtree">
                            Vocabulary Tree
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={5} href="/words">
                            Login
                        </NavItem>
                        <NavItem eventKey={6} href="/words">
                            Sign-Up
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;