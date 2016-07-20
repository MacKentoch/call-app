import React, { PropTypes } from 'react';

const Thead = () => {
  return (
    <thead>
      <tr>
        <th>Groupe</th>
        <th>Nb. Fiches en cours</th>
        <th>Nb. Fiches en retard</th>
        <th style={{width: '80px'}}>% retard</th>
        <th>Nb. Fiches non affectées</th>
      </tr>
    </thead>
  );
};

Thead.propTypes = {
  groupActivity: PropTypes.arrayOf(
    PropTypes.shape({
      groupId: PropTypes.number.isRequired,
      groupName: PropTypes.string.isRequired,
      nbFichesEnCours: PropTypes.number.isRequired,
      nbFichesEnRetard: PropTypes.number.isRequired,
      nbFichesNonAffectees: PropTypes.number.isRequired,
      pourcentageFicheRetard: PropTypes.number.isRequired
    })
  )
};

export default Thead;
