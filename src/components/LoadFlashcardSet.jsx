import React from 'react'
import FlashcardList from './FlashcardList'
import axios from 'axios'
class LoadFlashcardSet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      flashcards: [],
      title: ''
    };
  }

  getInitialState() {
    return {flashcards: [],title:''};
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/flashcards').then(response => {
      this.setState({flashcards: response._embedded.flashcards});
    });
  }
  render() {
    return (<FlashcardList flashcards={this.state.flashcards} title={this.state.title}/>);
  }
}

export default LoadFlashcardSet;
