import {
  REQUEST_GET_GEST_CONTACTS,
  RECEIVED_GET_GEST_CONTACTS,
  ERROR_GET_GEST_CONTACTS
}                                     from '../../actions/gestContacts/gestContacts';
import {
  SET_IS_COLLAPSED_GEST_CONTACTS_IDENTITE,
  UNSET_IS_COLLAPSED_GEST_CONTACTS_IDENTITE
}                                     from '../../actions/gestContacts/gestContactsIdentite/gestContactsIdentite';
import {
  SET_IS_COLLAPSED_CONTACTS_BENEF_CONTACT,
  UNSET_IS_COLLAPSED_CONTACTS_BENEF_CONTACT
}                                     from '../../actions/gestContacts/gestContactsBenefContact/gestContactsBenefContact';
import {
  SET_IS_COLLAPSED_CONTACTS_CONTACT,
  UNSET_IS_COLLAPSED_CONTACTS_CONTACT
}                                     from '../../actions/gestContacts/gestContactsContact/gestContactsContact';
import {
  SET_IS_COLLAPSED_CONTACTS_DOSSIERS,
  UNSET_IS_COLLAPSED_CONTACTS_DOSSIERS
}                                     from '../../actions/gestContacts/gestContactsDossiers/gestContactsDossiers';


const initialState = {
  actionTime: '',
  // error:
  error: '',
  // post benef payload
  postPayload: {},
  // general fields
  isFetchingAll: false,

  benefId: 0,
  contactId: 0,
  // identité
  isFetchingIdentite: false,
  lastFetchTimeIdentite: '',
  isCollapsedIdentite: true,

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
  isCollapsedBenefContact: true,

  fixedPhone: '',
  mobilePhone: '',
  email: '',
  emailIsValid: false,
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
  isCollapsedDossiers: true,

  dossiers: [],

  // contact
  isCollapsedContact: true
};


const gestContacts = (state = initialState, action) => {
  switch (action.type) {

  // /////////////////
  // common
  // ////////////////
  case REQUEST_GET_GEST_CONTACTS:
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

      contactId: action.contactId,
      benefId: action.benefId
    };

  case RECEIVED_GET_GEST_CONTACTS:
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

      // contactId may be null if creation
      contactId: action.gestBenef && action.gestBenef.contactId
        ? action.gestBenef.contactId
        : initialState.contactId,
      // benefId should always be returned (as id) since no contact possible without a benef
      benefId: action.gestBenef && action.gestBenef.id
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

  case ERROR_GET_GEST_CONTACTS:
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
  case SET_IS_COLLAPSED_GEST_CONTACTS_IDENTITE:
  case UNSET_IS_COLLAPSED_GEST_CONTACTS_IDENTITE:
    return {
      ...state,
      isCollapsedIdentite: action.isCollapsedIdentite,
      actionTime: action.time
    };

  // /////////////////
  // contact (benef)
  // ////////////////
  case SET_IS_COLLAPSED_CONTACTS_BENEF_CONTACT:
  case UNSET_IS_COLLAPSED_CONTACTS_BENEF_CONTACT:
    return {
      ...state,
      isCollapsedBenefContact: action.isCollapsedBenefContact,
      actionTime: action.time
    };

  // /////////////////
  // dossiers
  // ////////////////
  case SET_IS_COLLAPSED_CONTACTS_DOSSIERS:
  case UNSET_IS_COLLAPSED_CONTACTS_DOSSIERS:
    return {
      ...state,
      isCollapsedDossiers: action.isCollapsedDossiers,
      actionTime: action.time
    };

  // // /////////////////
  // // contact
  // // ////////////////
  // case SET_IS_COLLAPSED_CONTACTS_CONTACT:
  // case UNSET_IS_COLLAPSED_CONTACTS_CONTACT:
  //   return {
  //     ...state,
  //     isCollapsedContact: action.isCollapsedContact,
  //     actionTime: action.time
  //   };

  default:
    return state;
  }
};

export default gestContacts;
