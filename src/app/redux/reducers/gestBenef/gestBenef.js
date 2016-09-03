import {
  REQUEST_GET_GEST_BENEF,
  RECEIVED_GET_GEST_BENEF,
  ERROR_GET_GEST_BENEF
}                                     from '../../actions/gestBenef/gestBenef';
import {
  REQUEST_GET_GEST_BENEF_IDENTITE,
  RECEIVED_GET_GEST_BENEF_IDENTITE,
  ERROR_GET_GEST_BENEF_IDENTITE,

  SET_IS_EDITING_IDENTITE,
  UNSET_IS_EDITING_IDENTITE,

  SET_IS_SAVING_IDENTITE,
  UNSET_IS_SAVING_IDENTITE,

  SET_IS_COLLAPSED_IDENTITE,
  UNSET_IS_COLLAPSED_IDENTITE,

  REQUEST_POST_GEST_BENEF_IDENTITE,
  RECEIVED_POST_GEST_BENEF_IDENTITE,
  ERROR_POST_GEST_BENEF_IDENTITE,

  UPDATE_CIVILITE_IDENTITE,
  UPDATE_NOM_IDENTITE,
  UPDATE_NOM_DE_JEUNE_FILLE_IDENTITE,
  UPDATE_PRENOM_IDENTITE,
  UPDATE_DATE_DE_NAISSANCE_IDENTITE,
  UPDATE_NUMSS_IDENTITE,
  UPDATE_DATE_DECES_IDENTITE,
  UPDATE_MARITAL_STATUS_IDENTITE
}                                     from '../../actions/gestBenef/gestBenefIdentite/gestBenefIdentite';

const initialState = {
  actionTime: '',
  // error:
  error: '',
  // post benef payload
  postPayload: {},
  // general fields
  id: 0,
  // identité
  isFetchingIdentite: false,
  lastFetchTimeIdentite: '',
  isEditingIdentite: false,
  isSavingIdentite: false,
  isCollapsedIdentite: false,
  civilite: '',
  nom: '',
  nomJeuneFille: '',
  prenom: '',
  dateNaissance: '',
  numss: '',
  dateDeces: '',
  maritalStatus: '',
  // contact data
  isFetchingContact: false,
  lastFetchTimeContact: '',
  isEditingContact: false,
  isSavingContact: false,
  isCollapsedContact: false,
  fixedPhone: '',
  mobilePhone: '',
  email: '',
  // contact data > sub: adress
  numAdress: '',
  voie: '',
  complementAdr: '',
  codePostal: '',
  ville: '',
  pays: '',
  // dossiers:
  isFetchingDossiers: false,
  lastFetchTimeDossiers: '',
  isEditingDossiers: false,
  isSavingDossiers: false,
  isCollapsedDossiers: false,
  dossiers: []
};

const gestBenef = (state = initialState, action) => {
  switch (action.type) {

  case REQUEST_GET_GEST_BENEF:
    return {
      ...state,
      isFetchingIdentite: action.isFetching,
      isFetchingContact: action.isFetching,
      isFetchingDossiers: action.isFetching,
      lastFetchTimeIdentite: action.time,
      lastFetchTimeContact: action.time,
      lastFetchTimeDossiers: action.time,
      actionTime: action.time,

      id: action.benefId
    };

  case RECEIVED_GET_GEST_BENEF:
    return {
      ...state,
      isFetchingIdentite: action.isFetching,
      isFetchingContact: action.isFetching,
      isFetchingDossiers: action.isFetching,
      lastFetchTimeIdentite: action.time,
      lastFetchTimeContact: action.time,
      lastFetchTimeDossiers: action.time,
      actionTime: action.time,

      id: action.gestBenef && action.gestBenef.id
        ? action.gestBenef.id
        : initialState.id,

      // identité
      civilite: action.gestBenef && action.gestBenef.civilite
        ? action.gestBenef.civilite
        : initialState.civilite,
      nom: action.gestBenef && action.gestBenef.nom
        ? action.gestBenef.nom
        : initialState.nom,
      nomJeuneFille: action.gestBenef && action.gestBenef.nomJeuneFille
        ? action.gestBenef.nomJeuneFille
        : initialState.nomJeuneFille,
      prenom: action.gestBenef && action.gestBenef.prenom
        ? action.gestBenef.prenom
        : initialState.prenom,
      dateNaissance: action.gestBenef && action.gestBenef.dateNaissance
        ? action.gestBenef.dateNaissance
        : initialState.dateNaissance,
      numss: action.gestBenef && action.gestBenef.numss
        ? action.gestBenef.numss
        : initialState.numss,
      dateDeces: action.gestBenef && action.gestBenef.dateDeces
        ? action.gestBenef.dateDeces
        : initialState.dateDeces,
      maritalStatus: action.gestBenef && action.gestBenef.maritalStatus
        ? action.gestBenef.maritalStatus
        : initialState.maritalStatus,
      // contact data
      fixedPhone: action.gestBenef && action.gestBenef.fixedPhone
        ? action.gestBenef.fixedPhone
        : initialState.fixedPhone,
      mobilePhone: action.gestBenef && action.gestBenef.mobilePhone
        ? action.gestBenef.mobilePhone
        : initialState.mobilePhone,
      email: action.gestBenef && action.gestBenef.email
        ? action.gestBenef.email
        : initialState.email,
      // contact data > sub: adress
      numAdress: action.gestBenef && action.gestBenef.numAdress
        ? action.gestBenef.numAdress
        : initialState.numAdress,
      voie: action.gestBenef && action.gestBenef.voie
        ? action.gestBenef.voie
        : initialState.voie,
      complementAdr: action.gestBenef && action.gestBenef.complementAdr
        ? action.gestBenef.complementAdr
        : initialState.complementAdr,
      codePostal: action.gestBenef && action.gestBenef.codePostal
        ? action.gestBenef.codePostal
        : initialState.codePostal,
      ville: action.gestBenef && action.gestBenef.ville
        ? action.gestBenef.ville
        : initialState.ville,
      pays: action.gestBenef && action.gestBenef.pays
        ? action.gestBenef.pays
        : initialState.pays,
      // dossiers:
      dossiers: action.gestBenef && action.gestBenef.dossiers
        ? [...action.gestBenef.dossiers]
        : [...initialState.dossiers]
    };

  case ERROR_GET_GEST_BENEF:
    return {
      ...state,
      isFetchingIdentite: action.isFetching,
      isFetchingContact: action.isFetching,
      isFetchingDossiers: action.isFetching,
      lastFetchTimeIdentite: action.time,
      lastFetchTimeContact: action.time,
      lastFetchTimeDossiers: action.time,
      actionTime: action.time,
      error: action.error
    };

  case REQUEST_GET_GEST_BENEF_IDENTITE:
    return {
      ...state,
      isFetchingIdentite: action.isFetchingIdentite,
      lastFetchTimeIdentite: action.time,
      actionTime: action.time,

      id: action.benefId
    };

  case RECEIVED_GET_GEST_BENEF_IDENTITE:
    return {
      ...state,
      isFetchingIdentite: action.isFetchingIdentite,
      lastFetchTimeIdentite: action.time,
      actionTime: action.time,

      id: action.gestBenef && action.gestBenef.id
        ? action.gestBenef.id
        : initialState.id,

      // identité
      civilite: action.gestBenef && action.gestBenef.civilite
        ? action.gestBenef.civilite
        : initialState.civilite,
      nom: action.gestBenef && action.gestBenef.nom
        ? action.gestBenef.nom
        : initialState.nom,
      nomJeuneFille: action.gestBenef && action.gestBenef.nomJeuneFille
        ? action.gestBenef.nomJeuneFille
        : initialState.nomJeuneFille,
      prenom: action.gestBenef && action.gestBenef.prenom
        ? action.gestBenef.prenom
        : initialState.prenom,
      dateNaissance: action.gestBenef && action.gestBenef.dateNaissance
        ? action.gestBenef.dateNaissance
        : initialState.dateNaissance,
      numss: action.gestBenef && action.gestBenef.numss
        ? action.gestBenef.numss
        : initialState.numss,
      dateDeces: action.gestBenef && action.gestBenef.dateDeces
        ? action.gestBenef.dateDeces
        : initialState.dateDeces,
      maritalStatus: action.gestBenef && action.gestBenef.maritalStatus
        ? action.gestBenef.maritalStatus
        : initialState.maritalStatus
    };

  case ERROR_GET_GEST_BENEF_IDENTITE:
    return {
      ...state,
      isFetchingIdentite: action.isFetchingIdentite,
      lastFetchTimeIdentite: action.time,
      actionTime: action.time,

      error: action.error
    };

  case SET_IS_EDITING_IDENTITE:
  case UNSET_IS_EDITING_IDENTITE:
    return {
      ...state,
      isEditingIdentite: action.isEditingIdentite,
      actionTime: action.time
    };

  case SET_IS_SAVING_IDENTITE:
  case UNSET_IS_SAVING_IDENTITE:
    return {
      ...state,
      isSavingIdentite: action.isSavingIdentite,
      actionTime: action.time
    };

  case SET_IS_COLLAPSED_IDENTITE:
  case UNSET_IS_COLLAPSED_IDENTITE:
    return {
      ...state,
      isCollapsedIdentite: action.isCollapsedIdentite,
      actionTime: action.time
    };

  case REQUEST_POST_GEST_BENEF_IDENTITE:
    return {
      ...state,
      isFetchingIdentite: action.isFetchingIdentite,
      isSavingIdentite: action.isSavingIdentite,
      postPayload: action.payload,
      actionTime: action.time
    };

  case RECEIVED_POST_GEST_BENEF_IDENTITE:
    return {
      ...state,
      isFetchingIdentite: action.isFetchingIdentite,
      isSavingIdentite: action.isSavingIdentite,
      actionTime: action.time
    };

  case ERROR_POST_GEST_BENEF_IDENTITE:
    return {
      ...state,
      isFetchingIdentite: action.isFetchingIdentite,
      isSavingIdentite: action.isSavingIdentite,
      error: action.error,
      actionTime: action.time
    };

  case UPDATE_CIVILITE_IDENTITE:
    return {
      ...state,
      civilite: action.civilite,
      actionTime: action.time
    };

  case UPDATE_NOM_IDENTITE:
    return {
      ...state,
      nom: action.nom,
      actionTime: action.time
    };

  case UPDATE_NOM_DE_JEUNE_FILLE_IDENTITE:
    return {
      ...state,
      nomJeuneFille: action.nomDeJeuneFille,
      actionTime: action.time
    };

  case UPDATE_PRENOM_IDENTITE:
    return {
      ...state,
      prenom: action.prenom,
      actionTime: action.time
    };

  case UPDATE_DATE_DE_NAISSANCE_IDENTITE:
    return {
      ...state,
      dateNaissance: action.dateNaissance,
      actionTime: action.time
    };

  case UPDATE_NUMSS_IDENTITE:
    return {
      ...state,
      numss: action.numss,
      actionTime: action.time
    };

  case UPDATE_DATE_DECES_IDENTITE:
    return {
      ...state,
      dateDeces: action.dateDeces,
      actionTime: action.time
    };

  case UPDATE_MARITAL_STATUS_IDENTITE:
    return {
      ...state,
      maritalStatus: action.maritalStatus,
      actionTime: action.time
    };

  default:
    return state;
  }
};

export default gestBenef;
