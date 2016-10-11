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
  SET_IS_COLLAPSED_CONTACTS_DOSSIERS,
  UNSET_IS_COLLAPSED_CONTACTS_DOSSIERS
}                                     from '../../actions/gestContacts/gestContactsDossiers/gestContactsDossiers';
import {
  SET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT,
  UNSET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT,

  REQUEST_GET_GEST_CONTACTS_FICHE_CONTACT,
  RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT,
  ERROR_GET_GEST_CONTACTS_FICHE_CONTACT
}                                     from '../../actions/gestContacts/gestContactsFicheContact/gestContactsFicheContact';
import {
  SET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE,
  UNSET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE
}                                     from '../../actions/gestContacts/gestContactsFicheActivite/gestContactsFicheActivite';

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

  // contact benef data
  isFetchingContact: false,
  lastFetchTimeContact: '',
  isCollapsedBenefContact: true,

  fixedPhone: '',
  mobilePhone: '',
  email: '',
  emailIsValid: false,
  // contact benef data > sub: adress
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

  // fiche contact
  isFetchingFicheContact: false,
  lastFetchTimeFicheContact: '',
  isCollapsedFicheContact: false,
  isSavingFicheContact: false,

  dateCreationFicheContact: '',
  creeParFicheContact: '',
  dateReceptionFicheContact: '',

  statutIndexFicheContact: 0, // index de statut par défault de 'listStatutFicheContact'
  listStatutFicheContact: ['En-cours', 'Clôturée'], // tous (enum) les statuts de fiche de contact

  dateClotureFicheContact: '',
  clotureParFicheContact: '',

  typeIndexFicheContact: 0, // index par default du type de fiche contact de listTypeFicheContact
  listTypeFicheContact: ['Information', 'Réclamation'], // tous (enum) les types de fiche de contact

  canalIndexFicheContact: 0,
  listCanauxFicheContact: ['Téléphone', 'Mail', 'Courier reçu', 'Fax reçu'],

  numDossierIndexSelected: 0,
  listNumDossierFicheContact: [], // benef numDossiers list

  domaineFicheContact: '',
  statutBenefFicheContact: '',

  listMotifLevel2: [], // enum to fetch from server: {id: number, libelle: string}
  listMotifLevel3: [], // enum to fetch from server: {id: number, libelle: string}
  listMotifLevel4: [], // enum to fetch from server: {id: number, libelle: string}

  attachmentsFicheContact: [],
  commentaireFicheContact: '',

  groupeDestinataireIsActive: true,  // la list de choix doit être desactivée si statutIndexFicheContact <> En-cours
  groupeDestinataireIndexSelected: 0,
  defaultGroupeDestinataireValue: 'Choisir le groupe destinataire',
  listGroupeDestinataire: ['Choisir le groupe destinataire'], // to fill from server query

  // fiche activites + ficheContactMotifs
  isCollapsedFicheActivite: false,
  isFetchingFicheActivite: false,
  lastFetchTimeFicheActivite: false,

  selectedActiviteId: 0,
  listCanauxFicheActivite: ['Téléphone', 'Mail', 'Courier reçu', 'Fax reçu'] // ,

  // // pour info: object activite (dans motif):
  // activiteId: 0, // activite est un combinaison de motifLevel2+motifLevel3+motifLevel4
  //
  // selectMotifLevel2IdFicheContact: 0, // from listMotifLevel2
  // selectMotifLevel3IdFicheContact: 0, // from listMotifLevel3
  // selectMotifLevel4IdFicheContact: 0, // from listMotifLevel4
  // // affiche libelle d emotif niveau 4 dna sle champs motif des activites
  // dateCreation: '',
  // creePar: '',
  // traiteePar: '',
  // statutIndex: 0, // index de statut par défault de 'listStatutFicheContact'
  // listStatut: ['En-cours', 'Clôturée'], // tous (enum) les statuts de fiche de contact
  // dateCloture: '',
  // cloturePar: '',
  // // libelle motif de niveau 4 a afficher dans motif
  // canalIndexFicheActivite: 0,
  // listAttachements: [],
  // listCommenatire: []
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
  // /////////////////
  case SET_IS_COLLAPSED_CONTACTS_DOSSIERS:
  case UNSET_IS_COLLAPSED_CONTACTS_DOSSIERS:
    return {
      ...state,
      isCollapsedDossiers: action.isCollapsedDossiers,
      actionTime: action.time
    };

  // /////////////////
  // fiche contact
  // /////////////////
  case SET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT:
  case UNSET_IS_COLLAPSED_CONTACTS_FICHE_CONTACT:
    return {
      ...state,
      isCollapsedFicheContact: action.isCollapsedFicheContact,
      actionTime: action.time
    };

  case REQUEST_GET_GEST_CONTACTS_FICHE_CONTACT:
    return {
      ...state,
      isFetchingContact: action.isFetchingContact,
      lastFetchTimeContact: action.time,
      actionTime: action.time,

      contactId: action.contactId,
      benefId: action.benefId
    };

  case RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT:
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

  case ERROR_GET_GEST_CONTACTS_FICHE_CONTACT:
    return {
      ...state,
      isFetchingContact: action.isFetchingContact,
      lastFetchTimeContact: action.time,
      actionTime: action.time,
      error: action.error
    };


  // /////////////////
  // fiche activite
  // /////////////////
  case SET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE:
  case UNSET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE:
    return {
      ...state,
      isCollapsedFicheActivite: action.isCollapsedFicheActivite,
      actionTime: action.time
    };

  case REQUEST_GET_GEST_CONTACTS_FICHE_CONTACT:
    return {
      ...state,
      isCollapsedFicheContact: action.isCollapsedFicheContact,
      isFetchingFicheContact: action.isFetchingFicheContact,
      lastFetchTimeFicheContact: action.lastFetchTimeFicheContact
    };

  case RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT:
    return {
      ...state,
      isFetchingFicheContact: action.isFetchingFicheContact,
      lastFetchTimeFicheContact: action.lastFetchTimeFicheContact,
      ficheContact: action.ficheContact
    };

  case ERROR_GET_GEST_CONTACTS_FICHE_CONTACT:
    return {

    };

  default:
    return state;
  }
};

export default gestContacts;
