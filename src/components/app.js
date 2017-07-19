import React from 'react';
import Header from './common/header';
import Routes from '../routes';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Routes/>
        </div>
      </Router>
    );
  }
}

module.exports = App;