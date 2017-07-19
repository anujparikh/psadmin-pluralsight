import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from './common/header';
import HomePage from './homePage';
import AuthorPage from './authors/authorPage';
import AboutPage from './about/aboutPage';
import NotFoundPage from './notFoundPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <div>
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/authors" component={AuthorPage}/>
                <Route path="/about" component={AboutPage}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

module.exports = App;