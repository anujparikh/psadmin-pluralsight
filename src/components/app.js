import React from 'react';
import Header from './common/header';
import Routes from '../routes';
import {HashRouter as Router, browserHistory} from 'react-router-dom';

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