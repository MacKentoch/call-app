import React, { PropTypes } from 'react';

const Title = ({mailBoxName}) => {
  return (
    <h2 style={{marginLeft: '10px', color: '4A4A4A'}}>
      <i className="fa fa-inbox"></i>
      &nbsp;
      {mailBoxName}
    </h2>
  );
};

Title.propTypes = {
  mailBoxName: PropTypes.string.isRequired
};

export default Title;
