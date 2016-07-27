import React, { PropTypes } from 'react';

const MailBoxNewEmailButton = ({text, onClick}) => {
  return (
    <div className="panel">
      <button
        className="btn btn-primary btn-block mailBoxNewEmailButton_button"
        onClick={onClick}>
        { text }
      </button>
    </div>
  );
};

MailBoxNewEmailButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MailBoxNewEmailButton;
