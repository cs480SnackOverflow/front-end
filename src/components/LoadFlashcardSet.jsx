import React from 'react';
import FlashcardList from './FlashcardList';
import axios from 'axios';
import annyang from 'annyang';

class LoadFlashcardSet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      flashcards: [],
      title: '',
      choice: 'init'
    };
  }

  getFlashcards() {
    axios.get('/api/flashcards').then(response => {
      this.setState({flashcards: response.data._embedded.flashcards});
      this.setState({title: response.data._embedded.flashcards[0].title});
    });
  }

  startAnnyang() {
    let commands = {
      'introduction': () => this.setState({choice: 'intro'}),
      'study': () => this.sayOutLoud('Study mode activated')
    };
    annyang.addCommands(commands);
    annyang.start();
  }

  getInitialState() {
    return {flashcards: [],title:''};
  }

  sayOutLoud(sentences) {
    let audioSrc = 'http://commuterstudy.com/audio?msg=' + sentences;
    let audio = new Audio(audioSrc);
    audio.play();
  }

  componentDidMount() {
    this.getFlashcards();
    this.sayOutLoud(this.sayIntroduction());
    this.startAnnyang();
  }

  sayIntroduction() {
    let str = 'Welcome to Commuter Study. Would you like to study or test?';
    return str;
  }

  speak(choice){
    if(choice === 'study'){
      console.log(choice);
      return this.study();
    }
    else if(choice === 'intro'){
      return this.sayIntroduction();
    }
    else if(choice ==='init'){
      return '';
    }
  }
  study(){
    const flashcards = this.state.flashcards;
    let str = 'Okay, I will say all terms followed by their definitions';
    flashcards.forEach(function(flashcard){
      str = str+". "+flashcard.term+'. '+flashcard.definition ;
    });
    return str.trim();
  }

  render() {
    return (
      <div>
        <FlashcardList flashcards={this.state.flashcards} title={this.state.title}/>
      </div>
    );
  }
}

export default LoadFlashcardSet;
