import React, { PropTypes } from 'react';

const FormLabel = ({id, label, value}) => {
  return (
    <div className="form-group">
      <label
        className="control-label"
        htmlFor={'formLabel' + id}>
        {label}
      </label>
      <div>
        <label className="formLabelValue">
          {value}
        </label>
      </div>
    </div>
  );
};

FormLabel.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default FormLabel;
