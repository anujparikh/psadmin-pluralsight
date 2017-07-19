import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/homePage';
import AuthorPage from './components/authors/authorPage';
import AboutPage from './components/about/aboutPage';
import NotFoundPage from './components/notFoundPage';

module.exports = () => {
  return (
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
  );
};