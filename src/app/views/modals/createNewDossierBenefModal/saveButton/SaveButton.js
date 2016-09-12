import React, { PropTypes } from 'react';

const SaveButton = ({ buttonText, onClick }) => {
  return (
    <button
      className="btn btn-block orange_button"
      type="button"
      onClick={onClick} >
      { buttonText }
    </button>
  );
};

SaveButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SaveButton;
