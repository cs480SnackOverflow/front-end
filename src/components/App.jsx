import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import CreateFlashcardList from './CreateFlashcardList';
import LoadFlashcardSet from './LoadFlashcardSet';
import LandingPage from './LandingPage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flashcards: [],
      title: '',
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={TopNavbar}/>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/sets' component={LoadFlashcardSet}/>
          <Route path='/create' component={CreateFlashcardList}/>
        </div>
      </Router>

    )
  }
}

export default App;
