import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import CreateFlashcardList from './CreateFlashcardList';
import LoadFlashcardSet from './LoadFlashcardSet';
import annyang from 'annyang';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flashcards: []
    };
  }

  componentDidMount() {
    if (annyang) {
      let commands = {
        'hello': () => console.log('hello world')
      };
      annyang.addCommands(commands);
      annyang.start();
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={TopNavbar}/>
          <Route path='/sets' component={LoadFlashcardSet}/>
          <Route path='/create' component={CreateFlashcardList}/>
        </div>
      </Router>
    )
  }
}

export default App;
