import React, { PropTypes } from 'react';
import TitreBoite           from './titreBoite/TitreBoite';
import ActionsBoite         from './actionsBoite/ActionsBoite';

const BoiteMail = ({id, titre, receptionRoute, envoyesRoute}) => {
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
        receptionRoute={receptionRoute}
        envoyesRoute={envoyesRoute}
      />
      <span style={{margin: '10px'}}></span>
    </li>
  );
};

BoiteMail.propTypes = {
  id: PropTypes.number.isRequired,
  titre: PropTypes.string.isRequired,
  receptionRoute: PropTypes.string.isRequired,
  envoyesRoute: PropTypes.string.isRequired
};

export default BoiteMail;
