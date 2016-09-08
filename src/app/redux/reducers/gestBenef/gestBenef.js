import {
  REQUEST_GET_GEST_BENEF,
  RECEIVED_GET_GEST_BENEF,
  ERROR_GET_GEST_BENEF,
  RESET_GEST_BENEF
}                                     from '../../actions/gestBenef/gestBenef';
import {
  RESET_GEST_BENEF_IDENTITE,

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
import {
  RESET_GEST_BENEF_CONTACT,

  REQUEST_GET_GEST_BENEF_CONTACT,
  RECEIVED_GET_GEST_BENEF_CONTACT,
  ERROR_GET_GEST_BENEF_CONTACT,

  SET_IS_EDITING_CONTACT,
  UNSET_IS_EDITING_CONTACT,

  SET_IS_SAVING_CONTACT,
  UNSET_IS_SAVING_CONTACT,

  SET_IS_COLLAPSED_CONTACT,
  UNSET_IS_COLLAPSED_CONTACT,

  REQUEST_POST_GEST_BENEF_CONTACT,
  RECEIVED_POST_GEST_BENEF_CONTACT,
  ERROR_POST_GEST_BENEF_CONTACT,

  UPDATE_TELEPHONE_FIX_CONTACT,
  UPDATE_TELEPHONE_MOBILE_CONTACT,
  UPDATE_EMAIL_CONTACT,
  UPDATE_NUM_ADRESS_CONTACT,
  UPDATE_VOIE_ADRESS_CONTACT,
  UPDATE_COMPLEMENT_ADRESS_CONTACT,
  UPDATE_CODE_POSTAL_CONTACT,
  UPDATE_VILLE_CONTACT,
  UPDATE_PAYS_CONTACT
}                                     from '../../actions/gestBenef/gestBenefContact/gestBenefContact';
import {
  REQUEST_GET_GEST_BENEF_ALL_DOSSIERS,
  RECEIVED_GET_GEST_BENEF_ALL_DOSSIERS,
  ERROR_GET_GEST_BENEF_ALL_DOSSIERS,

  REQUEST_ADD_GEST_BENEF_NEW_DOSSIER,
  RECEIVED_ADD_GEST_BENEF_NEW_DOSSIER,
  ERROR_ADD_GEST_BENEF_NEW_DOSSIER,

  REQUEST_UPDATE_GEST_BENEF_DOSSIER,
  RECEIVED_UPDATE_GEST_BENEF_DOSSIER,
  ERROR_UPDATE_GEST_BENEF_DOSSIER,

  SET_IS_SAVING_NEW_DOSSIER,
  UNSET_IS_SAVING_NEW_DOSSIER,

  SET_IS_EDITING_DOSSIER,
  UNSET_IS_EDITING_DOSSIER,

  SET_IS_COLLAPSED_DOSSIERS,
  UNSET_IS_COLLAPSED_DOSSIERS
}                                     from '../../actions/gestBenef/gestBenefDossiers/gestBenefDossiers';
const initialState = {
  actionTime: '',
  // error:
  error: '',
  // post benef payload
  postPayload: {},
  // general fields
  isFetchingAll: false,
  id: 0,
  // identité
  isFetchingIdentite: false,
  lastFetchTimeIdentite: '',
  isEditingIdentite: false,
  isSavingIdentite: false,
  isCollapsedIdentite: false,

  civilite: '',
  civiliteIsValid: false,

  nom: '',
  nomIsValid: false,

  nomJeuneFille: '',
  nomJeuneFilleIsValid: false,

  prenom: '',
  prenomIsValid: false,

  dateNaissance: '',
  dateNaissanceIsValid: false,

  numss: '',
  numssIsValid: false,

  dateDeces: '',
  dateDecesIsValid: false,

  maritalStatus: '',
  maritalStatusIsValid: false,

  // contact data
  isFetchingContact: false,
  lastFetchTimeContact: '',
  isEditingContact: false,
  isSavingContact: false,
  isCollapsedContact: false,

  fixedPhone: '',
  fixedPhoneIsValid: false,

  mobilePhone: '',
  mobilePhoneIsValid: false,

  email: '',
  emailIsValid: false,

  // contact data > sub: adress
  numAdress: '',
  numAdressIsValid: false,

  voie: '',
  voieIsValid: false,

  complementAdr: '',
  complementAdrIsValid: false,

  codePostal: '',
  codePostalIsValid: false,

  ville: '',
  villeIsvalid: false,

  pays: '',
  paysIsValid: false,

  // dossiers:
  isFetchingDossiers: false,
  lastFetchTimeDossiers: '',
  isEditingDossiers: false,
  isSavingDossiers: false,
  isCollapsedDossiers: false,

  dossiers: [],
  editDossierId: 0
};

const gestBenef = (state = initialState, action) => {
  switch (action.type) {

  // /////////////////
  // common
  // ////////////////
  case RESET_GEST_BENEF:
    return {
      ...state,
      id: initialState.id,
      // identité
      civilite: initialState.civilite,
      nom: initialState.nom,
      nomJeuneFille: initialState.nomJeuneFille,
      prenom: initialState.prenom,
      dateNaissance: initialState.dateNaissance,
      numss: initialState.numss,
      dateDeces: initialState.dateDeces,
      maritalStatus: initialState.maritalStatus,
      // contact data
      fixedPhone: initialState.fixedPhone,
      mobilePhone: initialState.mobilePhone,
      email: initialState.email,
      // contact data > sub: adress
      numAdress: initialState.numAdress,
      voie: initialState.voie,
      complementAdr: initialState.complementAdr,
      codePostal: initialState.codePostal,
      ville: initialState.ville,
      pays: initialState.pays,
      // dossiers:
      dossiers:  [...initialState.dossiers],
      editDossierId: initialState.editDossierId,

      actionTime: action.time
    };
  case REQUEST_GET_GEST_BENEF:
    return {
      ...state,
      isFetchingAll: true,
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
      isFetchingAll: false,
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
        : [...initialState.dossiers],

      editDossierId: initialState.editDossierId
    };

  case ERROR_GET_GEST_BENEF:
    return {
      ...state,
      isFetchingAll: false,
      isFetchingIdentite: action.isFetching,
      isFetchingContact: action.isFetching,
      isFetchingDossiers: action.isFetching,
      lastFetchTimeIdentite: action.time,
      lastFetchTimeContact: action.time,
      lastFetchTimeDossiers: action.time,
      actionTime: action.time,
      error: action.error
    };

  // /////////////////
  // identite
  // ////////////////
  case RESET_GEST_BENEF_IDENTITE:
    return {
      ...state,
      civilite: initialState.civilite,
      nom: initialState.nom,
      nomJeuneFille: initialState.nomJeuneFille,
      prenom: initialState.prenom,
      dateNaissance: initialState.dateNaissance,
      numss: initialState.numss,
      dateDeces: initialState.dateDeces,
      maritalStatus: initialState.maritalStatus,

      actionTime: action.time
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

  // /////////////////
  // contact
  // ////////////////
  case RESET_GEST_BENEF_CONTACT:
    return {
      ...state,
      fixedPhone: initialState.fixedPhone,
      mobilePhone: initialState.mobilePhone,
      email: initialState.email,
      // contact data > sub: adress
      numAdress: initialState.numAdress,
      voie: initialState.voie,
      complementAdr: initialState.complementAdr,
      codePostal: initialState.codePostal,
      ville: initialState.ville,
      pays: initialState.pays,

      actionTime: action.time
    };


  case REQUEST_GET_GEST_BENEF_CONTACT:
    return {
      ...state,
      isFetchingContact: action.isFetchingContact,
      lastFetchTimeIdentite: action.time,
      actionTime: action.time,

      id: action.benefId
    };

  case RECEIVED_GET_GEST_BENEF_CONTACT:
    return {
      ...state,
      isFetchingContact: action.isFetchingContact,
      lastFetchTimeContact: action.time,
      actionTime: action.time,

      id: action.gestBenef && action.gestBenef.id
        ? action.gestBenef.id
        : initialState.id,
      fixedPhone: action.gestBenef && action.gestBenef.fixedPhone
        ? action.gestBenef.fixedPhone
        : initialState.fixedPhone,
      mobilePhone: action.gestBenef && action.gestBenef.mobilePhone
        ? action.gestBenef.mobilePhone
        : initialState.mobilePhone,
      email: action.gestBenef && action.gestBenef.email
        ? action.gestBenef.email
        : initialState.email,
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
        : initialState.pays
    };

  case ERROR_GET_GEST_BENEF_CONTACT:
    return {
      ...state,
      isFetchingContact: action.isFetchingContact,
      lastFetchTimeContact: action.time,
      actionTime: action.time,

      error: action.error
    };

  case UPDATE_TELEPHONE_FIX_CONTACT:
    return {
      ...state,
      fixedPhone: action.fixedPhone,
      actionTime: action.time
    };

  case UPDATE_TELEPHONE_MOBILE_CONTACT:
    return {
      ...state,
      mobilePhone: action.mobilePhone,
      actionTime: action.time
    };

  case UPDATE_EMAIL_CONTACT:
    return {
      ...state,
      email: action.email,
      actionTime: action.time
    };

  case UPDATE_NUM_ADRESS_CONTACT:
    return {
      ...state,
      numAdress: action.numAdress,
      actionTime: action.time
    };

  case UPDATE_VOIE_ADRESS_CONTACT:
    return {
      ...state,
      voie: action.voie,
      actionTime: action.time
    };

  case UPDATE_COMPLEMENT_ADRESS_CONTACT:
    return {
      ...state,
      complementAdr: action.complementAdr,
      actionTime: action.time
    };

  case UPDATE_CODE_POSTAL_CONTACT:
    return {
      ...state,
      codePostal: action.codePostal,
      actionTime: action.time
    };

  case UPDATE_VILLE_CONTACT:
    return {
      ...state,
      ville: action.ville,
      actionTime: action.time
    };

  case UPDATE_PAYS_CONTACT:
    return {
      ...state,
      pays: action.pays,
      actionTime: action.time
    };

  case SET_IS_EDITING_CONTACT:
  case UNSET_IS_EDITING_CONTACT:
    return {
      ...state,
      isEditingContact: action.isEditingContact,
      actionTime: action.time
    };

  case SET_IS_SAVING_CONTACT:
  case UNSET_IS_SAVING_CONTACT:
    return {
      ...state,
      isSavingContact: action.isSavingContact,
      actionTime: action.time
    };

  case SET_IS_COLLAPSED_CONTACT:
  case UNSET_IS_COLLAPSED_CONTACT:
    return {
      ...state,
      isCollapsedContact: action.isCollapsedContact,
      actionTime: action.time
    };

  case REQUEST_POST_GEST_BENEF_CONTACT:
    return {
      ...state,
      isFetchingContact: action.isFetchingContact,
      isSavingContact: action.isSavingContact,
      postPayload: action.payload,
      actionTime: action.time
    };

  case RECEIVED_POST_GEST_BENEF_CONTACT:
    return {
      ...state,
      isFetchingContact: action.isFetchingContact,
      isSavingContact: action.isSavingContact,
      actionTime: action.time
    };

  case ERROR_POST_GEST_BENEF_CONTACT:
    return {
      ...state,
      isFetchingContact: action.isFetchingContact,
      isSavingContact: action.isSavingContact,
      error: action.error,
      actionTime: action.time
    };

  // /////////////////
  // dossiers
  // ////////////////

  case REQUEST_GET_GEST_BENEF_ALL_DOSSIERS:
    return {
      ...state,
      isFetchingDossiers: action.isFetchingDossiers,
      lastFetchTimeIdentite: action.time,
      actionTime: action.time
    };

  case RECEIVED_GET_GEST_BENEF_ALL_DOSSIERS:
    return {
      ...state,
      isFetchingDossiers: action.isFetchingDossiers,
      lastFetchTimeDossiers: action.time,
      actionTime: action.time,

      dossiers: [...action.dossiers]
    };

  case ERROR_GET_GEST_BENEF_ALL_DOSSIERS:
    return {
      ...state,
      isFetchingDossiers: action.isFetchingDossiers,
      lastFetchTimeDossiers: action.time,
      actionTime: action.time,

      error: action.error
    };

  case REQUEST_ADD_GEST_BENEF_NEW_DOSSIER:
    return {
      ...state,
      isFetchingDossiers: action.isFetchingDossiers,
      isSavingDossiers: action.isSavingDossiers,
      postPayload: action.payload,
      actionTime: action.time
    };

  case RECEIVED_ADD_GEST_BENEF_NEW_DOSSIER:
    return {
      ...state,
      isFetchingDossiers: action.isFetchingDossiers,
      isSavingDossiers: action.isSavingDossiers,
      actionTime: action.time,
      // important to update: to indicate data refresh in components:
      lastFetchTimeDossiers: action.time,

      dossiers: [...action.dossiers]
    };

  case ERROR_ADD_GEST_BENEF_NEW_DOSSIER:
    return {
      ...state,
      isFetchingDossiers: action.isFetchingDossiers,
      isSavingDossiers: action.isSavingDossiers,
      error: action.error,
      actionTime: action.time
    };

  case REQUEST_UPDATE_GEST_BENEF_DOSSIER:
    return {
      ...state,
      isFetchingDossiers: action.isFetchingDossiers,
      isSavingDossiers: action.isSavingDossiers,
      postPayload: action.payload,
      actionTime: action.time
    };

  case RECEIVED_UPDATE_GEST_BENEF_DOSSIER:
    return {
      ...state,
      isFetchingDossiers: action.isFetchingDossiers,
      isSavingDossiers: action.isSavingDossiers,
      actionTime: action.time,
      // important to update: to indicate data refresh in components:
      lastFetchTimeDossiers: action.time,

      dossiers: [...action.dossiers]
    };

  case ERROR_UPDATE_GEST_BENEF_DOSSIER:
    return {
      ...state,
      isFetchingDossiers: action.isFetchingDossiers,
      isSavingDossiers: action.isSavingDossiers,
      error: action.error,
      actionTime: action.time
    };

  case SET_IS_EDITING_DOSSIER:
  case UNSET_IS_EDITING_DOSSIER:
    return {
      ...state,
      isEditingDossiers: action.isEditingDossiers,
      editDossierId: action.editDossierId,
      actionTime: action.time
    };

  case SET_IS_SAVING_NEW_DOSSIER:
  case UNSET_IS_SAVING_NEW_DOSSIER:
    return {
      ...state,
      isSavingDossiers: action.isSavingDossiers,
      actionTime: action.time
    };

  case SET_IS_COLLAPSED_DOSSIERS:
  case UNSET_IS_COLLAPSED_DOSSIERS:
    return {
      ...state,
      isCollapsedDossiers: action.isCollapsedDossiers,
      actionTime: action.time
    };

  default:
    return state;
  }
};

export default gestBenef;
