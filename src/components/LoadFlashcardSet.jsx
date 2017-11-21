import React from 'react';
import FlashcardList from './FlashcardList';
import axios from 'axios';
import annyang from 'annyang';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StudyFlashcardSet from './StudyFlashcardSet'

class LoadFlashcardSet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      flashcards: [],
      title: ''
    };
  }

  sayIntroduction() {
    let str = 'Welcome to Commuter Study. Would you like to study or test?';
    return str.split().join('+');
  }

  getInitialState() {
    return {flashcards: [],title:''};
  }

  componentDidMount() {
    axios.get('/api/flashcards').then(response => {
      this.setState({flashcards: response.data._embedded.flashcards});
      this.setState({title: response.data._embedded.flashcards[0].title});
    });
  }
  render() {
    let audioSrc = 'http://commuterstudy.com/audio?msg=' + this.sayIntroduction();
    console.log(audioSrc);
    return (
      <div>
        <audio autoPlay>
          <source src={ audioSrc } type='audio/mpeg'/>
            Your browser does not support the audio element.
        </audio>
        <FlashcardList flashcards={this.state.flashcards} title={this.state.title}/>
        <Nav>
          <NavItem>
            <NavLink href="/study">Study</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default LoadFlashcardSet;
