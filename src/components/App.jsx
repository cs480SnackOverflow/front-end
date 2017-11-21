import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import CreateFlashcardList from './CreateFlashcardList';
import LoadFlashcardSet from './LoadFlashcardSet';
import annyang from 'annyang';
import FlashcardList from './FlashcardList'
import StudyFlashcardSet from './StudyFlashcardSet'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flashcards: [{term: 'yu', definition: 'sun'}],
      title: ''
    };
  }

  componentDidMount() {
    if (annyang) {
      let commands = {
        'hello': () => console.log('hello world'),
        'study': () => console.log('study')
      };
      annyang.addCommands(commands);
      annyang.start();
    }
  }
  beginStudy(){
      return (<FlashcardList flashcards={this.flashcards} title={this.title}/>);
  }
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={TopNavbar}/>
          <Route path='/sets' component={LoadFlashcardSet}/>
          <Route path='/create' component={CreateFlashcardList}/>
          <Route path='/study' component={StudyFlashcardSet}/>
        </div>
      </Router>
    )
  }
}

export default App;
