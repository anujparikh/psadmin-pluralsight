import React from 'react';
import Input from '../common/textInput';

module.exports = (props) => {
  return (
    <div>
      <form>
        <h1>Manage Author</h1>
        <Input
          name="firstName"
          label="First Name"
          value={props.author.firstName}
          onChange={props.onChange}
        />
        <br/>
        <Input
          name="lastName"
          label="Last Name"
          value={props.author.lastName}
          onChange={props.onChange}
        />
        <br/>
        <input type="submit" value="Save" className="btn btn-default" onClick={props.onSave}/>
      </form>
    </div>
  );
};