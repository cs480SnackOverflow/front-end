import React from 'react';
import FlashcardList from './FlashcardList';
import axios from 'axios';
import annyang from 'annyang';

class LoadFlashcardSet extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      flashcards: [
      ],
      title: '',
    };
    this.flashcardStatus = [];
    this.correctAnswers = 0;
  }

  getFlashcards() {
    return axios.get('/api/flashcards').then(response => {
      this.setState({flashcards: response.data._embedded.flashcards});
      this.setState({title: response.data._embedded.flashcards[0].title});
      for (let i=0; i < this.state.flashcards.length; i++) {
        this.flashcardStatus.push(-1);
      }
    });
  }

  getNextQuestion() {
    let term = this.getUnansweredTerm();
    if (term !== '') {
      this.askQuestion(term);
    }
    else {
      this.getResult();
    }
  }

  getResult() {
    let result = 'You get ' + this.correctAnswers + ' correct answers over ' + this.state.flashcards.length + ' questions';
    return this.speak(result);
  }

  getUnansweredTerm() {
    for (let i=0; i< this.state.flashcards.length; i++) {
      if (this.flashcardStatus[i] === -1) {
        this.flashcardStatus[i] = 0;
        return this.state.flashcards[i].term;
      }
    }
    //if no more unanswered term
    return '';
  }

  getCurrentTerm() {
    for (let i=0; i< this.state.flashcards.length; i++) {
      if (this.flashcardStatus[i] === 0) {
        return this.state.flashcards[i].definition;
      }
    } 
  }
  

  checkFlashcard(definition) {
    for (let i=0; i < this.state.flashcards.length; i++) {
      if (this.state.flashcards[i].definition === definition) {
        this.flashcardStatus[i] = 1;
        break;
      }
    }
  }

  getCorrectAnswer(definition) {
    this.checkFlashcard(definition);
    this.correctAnswers += 1;
    this.speak('Correct')
      .then(() => this.getNextQuestion());
  }

  getIncorrectAnswer() {
    this.checkFlashcard(this.getCurrentTerm());
    this.speak('Incorrect')
      .then(() => this.getNextQuestion());
  }

  initializeCommands() {
    let commands = {
      'study': () => this.speak(this.study()),
      'test': () => this.testUser(),
      'next': () => this.getNextQuestion()
    };
    for (let i = 0; i < this.state.flashcards.length; i++) {
      let flashcard = this.state.flashcards[i];
      commands[flashcard.definition] = () => this.getCorrectAnswer(flashcard.definition);
    }
    return commands;
  }

  startAnnyang() {
    let commands = this.initializeCommands(); 
    annyang.addCommands(commands);
    annyang.addCallback('resultNoMatch', () => this.getIncorrectAnswer());
    annyang.start();
  }

  testUser() {
    this.speak('You are in testing mode. Starting now')
      .then(() => this.askQuestion(this.getUnansweredTerm()));
    
  }

  askQuestion(term) {
    return this.speak('What is the definition of' + term);
  }

  speak(message) {
    return new Promise((resolve, reject) => {
      let audioSrc = 'http://commuterstudy.com/audio?msg=' + message;
      let audio = new Audio(audioSrc);
      audio.onended = () => resolve();
      audio.play();
    });
  }

  getInitialState() {
    return {flashcards: [],title:''};
  }

  componentDidMount() {
    this.getFlashcards()
      .then(() => this.speak(this.sayIntroduction()))
      .then(() => this.startAnnyang());
  }

  sayIntroduction() {
    let str = 'Welcome to Commuter Study. Would you like to study or test?';
    return str;
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
