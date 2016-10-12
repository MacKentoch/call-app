import React, { PropTypes } from 'react';
import moment               from 'moment';
import { appConfig }        from '../../../../config';
import {
  CiviliteDropDown,
  FormLabel,
  TextInput,
  DateInput,
  TelephoneInput,
  NumssInput
}                           from '../../../../components';
import {
  isValidDateOrReturnDefault
}                           from '../../../../services';

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
                value={isValidDateOrReturnDefault(dateNaissance, formatDate)}
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

        {/* numss */}
        <div className="col-md-6">
          {
            isEditingIdentite
            ?
              <NumssInput
                id="inputNumss"
                label={'Numéro sécurité sociale'}
                value={numss}
                onChange={onNumssChanged}
              />
            :
              <FormLabel
                id="inputNumss"
                label={'Numéro sécurité sociale'}
                value={numss}
              />
          }
        </div>

      </div>

      {/* 3rd row */}
      <div className="row">
        <div className="col-md-6">
          {
            isEditingIdentite
            ?
              <DateInput
                id="inputDateDeces"
                label={'Date de décès'}
                value={isValidDateOrReturnDefault(dateDeces, formatDate)}
                onChange={onDateDecesChanged}
              />
            :
              <FormLabel
                id="inputDateDeces"
                label={'Date de décès'}
                value={dateDeces}
              />
          }
        </div>

        {/* statut marital */}
        <div className="col-md-6">
          {
            isEditingIdentite
            ?
              <TextInput
                id="inputStatutMarital"
                label={'Statut marital'}
                value={maritalStatus}
                onChange={onMaritalStatusChanged}
              />
            :
              <FormLabel
                id="inputStatutMarital"
                label={'Statut marital'}
                value={maritalStatus}
              />
          }
        </div>

      </div>

    </form>
  );
};

Form.propTypes = {
  isCollapsedFicheContact: PropTypes.bool.isRequired,
  lastFetchTimeFicheContact: PropTypes.string.isRequired,
  isFetchingFicheContact: PropTypes.bool.isRequired,
  isSavingFicheContact: PropTypes.bool.isRequired,

  dateCreationFicheContact: PropTypes.string.isRequired,
  onDateCreationFicheContactChanged: PropTypes.func.isRequired,

  creeParFicheContact: PropTypes.string.isRequired,
  onCreeParFicheContactChanged: PropTypes.func.isRequired,

  dateReceptionFicheContact: PropTypes.string.isRequired,
  onDateReceptionFicheContactChanged: PropTypes.func.isRequired,

  statutIndexFicheContact: PropTypes.number.isRequired,
  onStatutIndexFicheContactChanged: PropTypes.func.isRequired,

  listStatutFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  onListStatutFicheContactChanged: PropTypes.func.isRequired,

  dateClotureFicheContact: PropTypes.string.isRequired,
  onDateClotureFicheContactChanged: PropTypes.func.isRequired,

  clotureParFicheContact: PropTypes.string.isRequired,
  onClotureParFicheContactChanged: PropTypes.func.isRequired,

  typeIndexFicheContact: PropTypes.number.isRequired, // index par default du type de fiche contact de listTypeFicheContact
  onTypeIndexFicheContactChanged: PropTypes.func.isRequired,

  listTypeFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired, // tous (enum) les types de fiche de contact
  onListTypeFicheContactChanged: PropTypes.func.isRequired,

  canalIndexFicheContact: PropTypes.number.isRequired,
  onCanalIndexFicheContactChanged: PropTypes.func.isRequired,

  listCanauxFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  onListCanauxFicheContactChanged: PropTypes.func.isRequired,

  numDossierIndexSelected: PropTypes.number.isRequired,
  onNumDossierIndexSelectedChanged: PropTypes.func.isRequired,

  listNumDossierFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  onListNumDossierFicheContactChanged: PropTypes.func.isRequired,

  domaineFicheContact: PropTypes.string.isRequired,
  statutBenefFicheContact: PropTypes.string.isRequired,

  attachmentsFicheContact: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      filePath: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired
    })
  ).isRequired,
  commentaireFicheContact: PropTypes.string.isRequired,

  groupeDestinataireIsActive: PropTypes.bool.isRequired,  // la list de choix doit être desactivée si statutIndexFicheContact <> En-cours
  groupeDestinataireIdSelected: PropTypes.number.isRequired,
  listGroupeDestinataire: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      libelle: PropTypes.string
    })
  ).isRequired, // to fill from server query
};

export default Form;
