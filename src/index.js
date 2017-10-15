import React from 'react';
import ReactDOM from 'react-dom';
import TopNavbar from './components/TopNavbar';
import App from './components/App';

ReactDOM.render(
  <TopNavbar />, document.getElementById('top-navbar')
);

ReactDOM.render(
  <App />, document.getElementById('root')
);

