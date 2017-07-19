'use strict';
import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src="images/pluralsight-logo.png" alt="Pluralsight Logo"/>
            </Link>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/authors">Authors</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/badlink">Bad Link</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

module.exports = Header;