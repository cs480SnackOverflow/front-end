import React from 'react';
import ReactDOM from 'react-dom';
import TopNavbar from './components/TopNavbar';
import App from './components/App';
import CreateFlashcard from './components/CreateFlashcard';

ReactDOM.render(
  <TopNavbar />, document.getElementById('top-navbar')
);

ReactDOM.render(
  <CreateFlashcard />, document.getElementById('create-flashcard')
);

ReactDOM.render(
  <App />, document.getElementById('root')
);
