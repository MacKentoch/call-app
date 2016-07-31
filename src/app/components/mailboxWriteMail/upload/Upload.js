import React, { PropTypes } from 'react';

const Upload = ({}) => {
  return (
    <div className="form-group">
      <div className="btn btn-default btn-file">
        <i className="fa fa-paperclip"></i>
        &nbsp;
        Pièces jointes
        <input
          type="file"
          name="attachment"
        />
      </div>
      <p
        style={{
          display: 'block',
          marginTop: '5px',
          marginBottom: '10px',
          color: '#737373',
          fontSize: '11px'
        }}>
        Max. 4MB
      </p>
    </div>
  );
};

export default Upload;
