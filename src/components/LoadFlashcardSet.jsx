import React from 'react';
import FlashcardList from './FlashcardList';
import axios from 'axios';
import annyang from 'annyang';

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
        <FlashcardList flashcards={this.state.flashcards} title={this.state.title}/>
        <audio autoPlay>
          <source src={ audioSrc } type='audio/mpeg'/>
            Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default LoadFlashcardSet;
