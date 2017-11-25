import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Banner from 'react-banner'
import 'react-banner/dist/style.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class LandingPage extends Component {
  render() {
    return (
      <div>
      <div className="content">
        <h1>Commuter Study</h1>
        <ul className="header">
          <li> <Button color="primary" size="lg">  Create</Button></li>
          <li> <Button color="primary" size="lg">Study  </Button>{' '}{' '}</li>
          <li> <Button outline color="primary" size="lg">Learn More      </Button>{' '}</li>
        </ul>
      </div>
      </div>

    );
  }
}

export default LandingPage;
