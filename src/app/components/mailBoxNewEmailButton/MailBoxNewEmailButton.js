import React, { PropTypes } from 'react';
import { Link }             from 'react-router';

const MailBoxNewEmailButton = ({text, linkTo}) => {
  return (
    <div className="panel">
      <Link
        className="btn btn-primary btn-block mailBoxNewEmailButton_button"
        to={linkTo}>
        { text }
      </Link>
    </div>
  );
};

MailBoxNewEmailButton.propTypes = {
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
};

export default MailBoxNewEmailButton;
