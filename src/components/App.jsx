import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import FlashcardList from './FlashcardList';
import CreateFlashcardList from './CreateFlashcardList';
import LoadFlashcardSet from './LoadFlashcardSet';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flashcards: []
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={TopNavbar}/>
          <Route path='/sets' render={() =>
            <LoadFlashcardSet/>
          }/>
          <Route path='/create' component={CreateFlashcardList}/>
        </div>
      </Router>
    )
  }
}

export default App;
