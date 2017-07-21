'use strict';

import React, {PropTypes} from 'react';

const TextInput = (props) => {
  let wrapperClass = (props.error && props.error.length > 0) ? 'form-group has-error' : 'form-group';
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <input
          type="text"
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        <div className="text-danger">{props.error}</div>
      </div>
    </div>
  );
};

TextInput.propsType = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

module.exports = TextInput;