import React from 'react';
import ReactDOM from 'react-dom';
import TopNavbar from './components/TopNavbar';
import App from './components/App';
import CreateFlashcardList from './components/CreateFlashcardList';

ReactDOM.render(
  <TopNavbar />, document.getElementById('top-navbar')
);

ReactDOM.render(
  <CreateFlashcardList />, document.getElementById('create-flashcard-list')
);

ReactDOM.render(
  <App />, document.getElementById('root')
);
