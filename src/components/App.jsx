import React, { Component } from 'react';
import FlashcardList from './FlashcardList';

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
      <FlashcardList flashcards={this.state.flashcards} title={this.state.title} />
    )
  }
}

export default App;
