import React from 'react';
import AuthorForm from './authorForm';
import AuthorApi from '../../api/authorApi';
import {Redirect} from 'react-router-dom';

class ManageAuthor extends React.Component {

  state = {
    author: {
      id: '',
      firstName: '',
      lastName: ''
    },
    redirect: false
  };

  setAuthorState = (event) => {
    this.state.author[event.target.name] = event.target.value;
    return this.setState({
      author: this.state.author
    });
  };

  saveAuthor = (event) => {
    event.preventDefault();
    AuthorApi.saveAuthor(this.state.author);
    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/authors"/>)
    }
    return (
      <div>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
        />
      </div>
    );
  }
}

module.exports = ManageAuthor;