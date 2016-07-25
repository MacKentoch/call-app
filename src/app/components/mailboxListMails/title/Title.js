import React, { PropTypes } from 'react';

const Title = ({inboxMailName}) => {
  return (
    <h2 style={{marginLeft: '10px', color: '4A4A4A'}}>
      <i className="fa fa-inbox"></i>
      &nbsp;
      {inboxMailName}
    </h2>
  );
};

Title.propTypes = {
  inboxMailName: PropTypes.string.isRequired
};

export default Title;
