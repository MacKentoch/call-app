import React, { PropTypes } from 'react';
import TitreBoite           from './titreBoite/TitreBoite';
import ActionsBoite         from './actionsBoite/ActionsBoite';

const BoiteMail = ({id, titre, receptionCount, boiteReceptionPath, boiteEnvoiPath}) => {
  return (
    <li
      style={{
        marginBottom: '10px',
        lineHeight: '2.2em'
      }}>
      <TitreBoite
        titre={titre}
      />
      <ActionsBoite
        boiteId={id}
        boiteReceptionPath={boiteReceptionPath}
        receptionCount={receptionCount}
        boiteEnvoiPath={boiteEnvoiPath}
      />
      <span style={{margin: '10px'}}></span>
    </li>
  );
};

BoiteMail.propTypes = {
  id: PropTypes.number.isRequired,
  titre: PropTypes.string.isRequired,
  receptionCount: PropTypes.number.isRequired,
  boiteReceptionPath: PropTypes.string.isRequired,
  boiteEnvoiPath: PropTypes.string.isRequired
};

export default BoiteMail;
