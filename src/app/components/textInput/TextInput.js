import React, {
  PropTypes
}                 from 'react';

const TextInput = ({label, id, value, onChange}) => {
  return (
    <div className="form-group">
      <label
        className="control-label"
        htmlFor={id}>
        {label}
      </label>
      <div>
        <input
          className="form-control"
          id={id}
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  label:    PropTypes.string.isRequired,
  id:       PropTypes.string.isRequired,
  value:    PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
