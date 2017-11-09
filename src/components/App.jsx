import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import FlashcardList from './FlashcardList';
import CreateFlashcardList from './CreateFlashcardList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flashcards: [
        {'term': 'hello', 'definition': 'world'},
        {'term': 'yu', 'definition': 'sun'}
      ],
      title: 'Web dev'
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={TopNavbar}/>
          <Route path='/sets' render={() =>
            <FlashcardList flashcards={this.state.flashcards} title={this.state.title}/>
          }/>
          <Route path='/create' component={CreateFlashcardList}/>
        </div>
      </Router>
    )
  }
}

export default App;
