import React, { PropTypes } from 'react';

const ValidButton = ({onClick}) => {
  return (
    <button
      type="submit"
      className="btn btn-primary"
      onClick={onClick}>
      <i className="fa fa-envelope-o"></i>
      &nbsp;
      Envoyer
    </button>
  );
};

ValidButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ValidButton;
