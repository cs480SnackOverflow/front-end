import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class TopNavbar extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="index.html">Commuter Studdy</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Dashboard</NavItem>
          <NavItem eventKey={2} href="#">Create</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default TopNavbar;
