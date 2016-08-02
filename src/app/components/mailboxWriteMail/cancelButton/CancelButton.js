import React, { PropTypes } from 'react';

const CancelButton = ({onClick}) => {
  return (
    <button
      type="reset"
      className="btn btn-default"
      onClick={onClick}>
      <i className="fa fa-times"></i>
      &nbsp;
      Annuler
    </button>
  );
};

CancelButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CancelButton;
