import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Route } from 'react-router-dom';
import logo from '../images/commuter-study-gradient.png';
import { bounceInLeft,flipInY } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

require("../index.css");

const styles = {
  bounceInLeft: {
    animation: 'x 2s',
    animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft'),
  },
  flip:{
    animation: 'x 2s',
    animationName: Radium.keyframes(flipInY, 'flip'),
  }

}
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
const AboutButton = ({ title, history }) => (
  <Button
    outline color="primary" size="lg"
    onClick={() =>  window.location = 'http://cs480-projects.github.io/teams-fall2017/SnackOverflow/'}
  >
    {title}
  </Button>
);

const NavAbout = () => (
  <Route path='/' render={(props) => <AboutButton {...props}title="Learn more" />}/>
)
class LandingPage extends Component {
  render() {
    return (
      <div>
      <div className="content">
        <img src={logo} alt='Logo' width="200" height="150"/>
        <StyleRoot>
          <div className="test" style={styles.bounceInLeft}>
          <h1>Commuter Study</h1>
          </div>
          <div className="test" style={styles.flip}>
          <p>Learn more on the go.</p>
          </div>
        </StyleRoot>

        <ul className="header">

          <li> <NavCreate/></li>
          <li> <NavStudy/></li>
          <li> <NavAbout/></li>
        </ul>
      </div>
      </div>

    );
  }
}

export default LandingPage;
