import React, { PropTypes } from 'react';
import ToggleCollapse       from './toggleCollapse/ToggleCollapse';
import Form                 from './form/Form';
import Collapse             from 'react-collapse';


const Identite = ({
  isCollapsedIdentite,
  onCollapseClick,

  civilite,
  nom,
  nomJeuneFille,
  prenom,
  dateNaissance,
  numss,
  dateDeces,
  maritalStatus
}) => {
  return (
      <div>
        <div className="page-header">
          <i
            className="fa fa-user"
            aria-hidden="true"
            style={{color: '#444444'}}>
          </i>
          &nbsp;
          Informations "identité" du bénéficaire
          <ToggleCollapse
            isCollapsed={isCollapsedIdentite}
            toggleCollapse={onCollapseClick}
          />
        </div>
        <Collapse
          isOpened={!isCollapsedIdentite}
          keepCollapsedContent={false}>
          <div style={{ height: '230px' }}>
            <Form
              civilite={civilite}
              nom={nom}
              nomJeuneFille={nomJeuneFille}
              prenom={prenom}
              dateNaissance={dateNaissance}
              numss={numss}
              dateDeces={dateDeces}
              maritalStatus={maritalStatus}
            />
          </div>
        </Collapse>
      </div>

  );
};

Identite.propTypes = {
  isCollapsedIdentite: PropTypes.bool.isRequired,
  onCollapseClick: PropTypes.func.isRequired,

  civilite: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  nomJeuneFille: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  dateNaissance: PropTypes.string.isRequired,
  numss: PropTypes.string.isRequired,
  dateDeces: PropTypes.string.isRequired,
  maritalStatus: PropTypes.string.isRequired
};


export default Identite;
