'use strict';

import React from 'react';
import AuthorApi from '../../api/authorApi';
import AuthorList from './authorList';

class AuthorPage extends React.Component {
  state = {
    authors: []
  };

  componentDidMount() {
    this.setState({authors: AuthorApi.getAllAuthors()});
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
}

module.exports = AuthorPage;