'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/homePage';
import About from './components/about/aboutPage';
import Header from './components/common/header';
import Authors from './components/authors/authorPage';

class App extends React.Component {
  render() {
    let Child;

    switch (this.props.route) {
      case 'about':
        Child = About;
        break;
      case 'authors':
        Child = Authors;
        break;
      default:
        Child = Home;
    }

    return (
      <div>
        <Header/>
        <Child/>
      </div>
    )
  }
}

function render() {
  let route = window.location.hash.substr(1);
  ReactDOM.render(<App route={route}/>, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();