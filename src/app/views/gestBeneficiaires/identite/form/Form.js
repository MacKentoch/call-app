import React, { PropTypes } from 'react';
import moment               from 'moment';
import { appConfig }        from '../../../../config';
import {
  CiviliteDropDown,
  FormLabel,
  TextInput,
  DateInput
}                           from '../../../../components';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

const Form = ({
  isEditingIdentite,
  civilite,
  onCiviliteChange,
  nom,
  onNomChanged,
  nomJeuneFille,
  onNomJeuneFilleChanged,
  prenom,
  onPrenomChanged,
  dateNaissance,
  onDateNaissanceChanged,
  numss,
  onNumssChanged,
  dateDeces,
  onDateDecesChanged,
  maritalStatus,
  onMaritalStatusChanged
}) => {
  return (
    <form role="form">
      {/* 1st row */}
      <div className="row">

        {/* civilite */}
        <div className="col-md-2">
          {
            isEditingIdentite
            ?
              <CiviliteDropDown
                id="inputCivilite"
                label={'Civilité'}
                value={civilite}
                onChange={onCiviliteChange}
              />
            :
              <FormLabel
                id="inputCivilite"
                label={'Civilité'}
                value={civilite || ' --- '}
              />
          }
        </div>

        {/* nom */}
        <div className="col-md-3">
          {
            isEditingIdentite
            ?
              <TextInput
                id="inputNom"
                label={'Nom'}
                value={nom}
                onChange={onNomChanged}
              />
            :
              <FormLabel
                id="inputNom"
                label={'Nom'}
                value={nom}
              />
          }
        </div>

        {/* nomDe Jeunefille */}
        <div className="col-md-3">
          {
            isEditingIdentite
            ?
              <TextInput
                id="inputNomDeJeuneFille"
                label={'Nom de jeune fille'}
                value={nomJeuneFille}
                onChange={onNomJeuneFilleChanged}
              />
            :
              <FormLabel
                id="inputNomDeJeuneFille"
                label={'Nom de jeune fille'}
                value={nomJeuneFille}
              />
          }
        </div>

        {/* prenom */}
        <div className="col-md-3">
          {
            isEditingIdentite
            ?
              <TextInput
                id="inputPrenom"
                label={'Prénom'}
                value={prenom}
                onChange={onPrenomChanged}
              />
            :
              <FormLabel
                id="inputPrenom"
                label={'Prénom'}
                value={prenom}
              />
          }
        </div>

      </div>

      {/* 2nd row */}
      <div className="row">
        <div className="col-md-6">
          {
            isEditingIdentite
            ?
              <DateInput
                id="inputDateNaissance"
                label={'Date de naissance'}
                value={
                  moment(dateNaissance, formatDate).isValid
                    ? moment(dateNaissance, formatDate)
                    : moment('01/01/1900', formatDate)
                  }
                onChange={onDateNaissanceChanged}
              />
            :
              <FormLabel
                id="inputDateNaissance"
                label={'Date de naissance'}
                value={dateNaissance}
              />
          }
        </div>

      </div>


    </form>
  );
};

Form.propTypes = {
  isEditingIdentite: PropTypes.bool,

  civilite: PropTypes.string.isRequired,
  onCiviliteChange: PropTypes.func.isRequired,

  nom: PropTypes.string.isRequired,
  onNomChanged: PropTypes.func.isRequired,

  nomJeuneFille: PropTypes.string.isRequired,
  onNomJeuneFilleChanged: PropTypes.func.isRequired,

  prenom: PropTypes.string.isRequired,
  onPrenomChanged: PropTypes.func.isRequired,

  dateNaissance: PropTypes.string.isRequired,
  onDateNaissanceChanged: PropTypes.func.isRequired,

  numss: PropTypes.string.isRequired,
  onNumssChanged: PropTypes.func.isRequired,

  dateDeces: PropTypes.string.isRequired,
  onDateDecesChanged: PropTypes.func.isRequired,

  maritalStatus: PropTypes.string.isRequired,
  onMaritalStatusChanged: PropTypes.func.isRequired
};

export default Form;
