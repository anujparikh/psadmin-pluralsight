import React, {PropTypes} from 'react';
import Input from '../common/textInput';

const AuthorForm = (props) => {
  return (
    <div>
      <form>
        <h1>Manage Author</h1>
        <Input
          name="firstName"
          label="First Name"
          value={props.author.firstName}
          onChange={props.onChange}
          error={props.errors.firstName}
        />
        <br/>
        <Input
          name="lastName"
          label="Last Name"
          value={props.author.lastName}
          onChange={props.onChange}
          error={props.errors.lastName}
        />
        <br/>
        <input type="submit" value="Save" className="btn btn-default" onClick={props.onSave}/>
      </form>
    </div>
  );
};

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

module.exports = AuthorForm;