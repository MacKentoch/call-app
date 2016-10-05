import React, { PropTypes } from 'react';
// import moment               from 'moment';
// import { appConfig }        from '../../../../config';
import { FormLabel }        from '../../../../components';


const Form = ({
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
    <form role="form">
      {/* 1st row */}
      <div className="row">

        {/* civilite */}
        <div className="col-md-2">
          <FormLabel
            id="inputCivilite"
            label={'Civilité'}
            value={civilite || ' --- '}
          />
        </div>

        {/* nom */}
        <div className="col-md-3">
          <FormLabel
            id="inputNom"
            label={'Nom'}
            value={nom}
          />
        </div>

        {/* nomDe Jeunefille */}
        <div className="col-md-3">
          <FormLabel
            id="inputNomDeJeuneFille"
            label={'Nom de jeune fille'}
            value={nomJeuneFille}
          />
        </div>

        {/* prenom */}
        <div className="col-md-3">
          <FormLabel
            id="inputPrenom"
            label={'Prénom'}
            value={prenom}
          />
        </div>

      </div>

      {/* 2nd row */}
      <div className="row">
        <div className="col-md-6">
          <FormLabel
            id="inputDateNaissance"
            label={'Date de naissance'}
            value={dateNaissance}
          />
        </div>

        {/* numss */}
        <div className="col-md-6">
          <FormLabel
            id="inputNumss"
            label={'Numéro sécurité sociale'}
            value={numss}
          />
        </div>

      </div>

      {/* 3rd row */}
      <div className="row">
        <div className="col-md-6">
          <FormLabel
            id="inputDateDeces"
            label={'Date de décès'}
            value={dateDeces}
          />
        </div>

        {/* statut marital */}
        <div className="col-md-6">
          <FormLabel
            id="inputStatutMarital"
            label={'Statut marital'}
            value={maritalStatus}
          />
        </div>

      </div>

    </form>
  );
};

Form.propTypes = {

  civilite: PropTypes.string.isRequired,

  nom: PropTypes.string.isRequired,

  nomJeuneFille: PropTypes.string.isRequired,

  prenom: PropTypes.string.isRequired,

  dateNaissance: PropTypes.string.isRequired,

  numss: PropTypes.string.isRequired,

  dateDeces: PropTypes.string.isRequired,

  maritalStatus: PropTypes.string.isRequired
};

export default Form;
