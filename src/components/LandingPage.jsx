import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'react-banner/dist/style.css'
import { Route } from 'react-router-dom';

const CreateButton = ({ title, history }) => (
  <Button
    color="primary" size="lg"
    onClick={() => history.push('/create')}
  >
    {title}
  </Button>
);
const NavCreate = () => (
  <Route path="/" render={(props) => <CreateButton {...props}title="Create" />} />
)
const StudyButton = ({ title, history }) => (
  <Button
    color="primary" size="lg"
    onClick={() => history.push('/sets')}
  >
    {title}
  </Button>
);
const NavStudy = () => (
  <Route path="/" render={(props) => <StudyButton {...props}title="Study" />} />
)
class LandingPage extends Component {
  render() {
    return (
      <div>
      <div className="content">
        <img src={require('../images/commuter-study-gradient.png') } width="200" height="150"/>
        <h1>Commuter Study</h1>
        <p>Learn more on the go.</p>
        <ul className="header">
          <li> <NavCreate/></li>
          <li> <NavStudy/></li>
          <li> <Button outline color="primary" size="lg">Learn More      </Button>{' '}</li>
        </ul>
      </div>
      </div>

    );
  }
}

export default LandingPage;
