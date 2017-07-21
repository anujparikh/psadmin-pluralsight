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
    redirect: false,
    errors: {}
  };

  setAuthorState = (event) => {
    this.state.author[event.target.name] = event.target.value;
    return this.setState({
      author: this.state.author
    });
  };

  authorFormIsValid = () => {
    let formIsValid = true;
    this.state.errors = {}; //clear any previous errors.

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  };

  saveAuthor = (event) => {
    event.preventDefault();

    if (!this.authorFormIsValid()) {
      return;
    }

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
          errors={this.state.errors}
        />
      </div>
    );
  }
}

module.exports = ManageAuthor;