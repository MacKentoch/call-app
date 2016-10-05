import React, { PropTypes } from 'react';

const createDossierButton = ({onClick}) => {
  return (
    <button
      className="btn orange_button"
      style={{marginLeft: '20px'}}
      onClick={onClick}>
      <i
        className="fa fa-plus-circle"
        aria-hidden="true">
      </i>
      &nbsp;
      Créer un nouveau dossier
    </button>

  );
};

createDossierButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default createDossierButton;
