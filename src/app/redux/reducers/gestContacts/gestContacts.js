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
  ERROR_GET_GEST_CONTACTS_FICHE_CONTACT,

  REQUEST_SAVE_GEST_CONTACTS_FICHE_CONTACT,
  RECEIVED_SAVE_GEST_CONTACTS_FICHE_CONTACT,
  ERROR_SAVE_GEST_CONTACTS_FICHE_CONTACT,

  REQUEST_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER,
  RECEIVED_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER,
  ERROR_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER,
  // form updates:
  UPDATE_GEST_CONTACTS_DATE_CREATION,
  UPDATE_GEST_CONTACTS_DATE_RECEPTION,
  UPDATE_GEST_CONTACTS_STATUT_FICHE,
  UPDATE_GEST_CONTACTS_DATE_CLOTURE,
  UPDATE_GEST_CONTACTS_TYPE_INDEX,
  UPDATE_GEST_CONTACTS_NUM_DOSSIER_INDEX,
  UPDATE_GEST_CONTACTS_DOMAINE_FICHE_CONTACT,
  UPDATE_GEST_CONTACTS_COMMENTAIRES_FICHE_CONTACT,
  UPDATE_GEST_CONTACTS_GROUPE_DEST_ID_FICHE_CONTACT,

  ADD_NEW_COMBINAISON_MOTIS_CONTACTS_FICHE_CONTACT,
  REMOVE_NEW_COMBINAISON_MOTIS_CONTACTS_FICHE_CONTACT,

  ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_2,
  ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_3,
  ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_4,

  REQUEST_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE,
  RECEIVED_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE,
  ERROR_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE
}                                     from '../../actions/gestContacts/gestContactsFicheContact/gestContactsFicheContact';
import {
  SET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE,
  UNSET_IS_COLLAPSED_CONTACTS_FICHE_ACTIVITE,

  REQUEST_SAVE_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT,
  RECEIVED_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT,
  ERROR_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT
}                                     from '../../actions/gestContacts/gestContactsFicheActivite/gestContactsFicheActivite';
import {
  REQUEST_GET_GEST_CONTACTS_ALL_MOTIFS,
  RECEIVED_GET_GEST_CONTACTS_ALL_MOTIFS,
  ERROR_GET_GEST_CONTACTS_ALL_MOTIFS
}                                     from '../../actions/gestContacts/gestContactListMotifs/gestContactListMotifs';


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

  // lists motifs reference
  isFetchingAllMotifs: false, // fetch pour refresh de la liste des motifs de reference
  lastFetchTimeAllMotifs: '',
  listMotifLevel2: [], // enum to fetch from server: {id: number, libelle: string}
  listMotifLevel3: [], // enum to fetch from server: {id: number, libelle: string}
  listMotifLevel4: [], // enum to fetch from server: {id: number, libelle: string}

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

  isFetchingBenefInfoFromNumDossier: false,
  numDossierIndexSelected: 0,
  listNumDossierFicheContact: [], // benef numDossiers list

  domaineFicheContact: '',
  statutBenefFicheContact: '',
  listStatutBenefFicheContact: ['retraité', 'pré-retraité'],

  attachmentsFicheContact: [],
  commentaireFicheContact: '',

  groupeDestinataireIsActive: true,  // la list de choix doit être desactivée si statutIndexFicheContact <> En-cours
  groupeDestinataireIdSelected: 0,
  defaultGroupeDestinataireValue: {id: 0, libelle: 'Choisir le groupe destinataire'},
  listGroupeDestinataire: [{id: 0, libelle: 'Choisir le groupe destinataire'}], // to fill from server query

  // fiche activites + ficheContactMotifs
  isCollapsedFicheActivite: false,
  isFetchingFicheActivite: false,
  lastFetchTimeFicheActivite: '',
  isSavingActivite: false,

  activiteIdBeingEditing: 0, // utle si changement de motif sur une activite

  selectedActiviteId: 0,
  listCanauxFicheActivite: ['Téléphone', 'Mail', 'Courier reçu', 'Fax reçu'],
  activites: [],
  listStatutFicheActivite: ['En-cours', 'Clôturée'], // tous (enum) les statuts de fiche de'activite

  activiteUpdateTime: '',
  isFetchingFicheContactListMotifs: false,
  isSavingFicheNewActivite: false,
  newActivite: {},

  isSavingFicheNewActiviteNewComment: false // post a fiche activite new comment flag
};

const emptyActivite = {
  activiteId: 0, // nouvelle activite sans id tant que pas enregister en BDD
  isEditable: true, // si activiteId === 0 alors reste editable (on peut changer les motifs) sinon plus editable et les motifs sont bloqués
  selectMotifLevel2IdFicheContact: -1, // from listMotifLevel2
  selectMotifLevel3IdFicheContact: -1, // from listMotifLevel3
  selectMotifLevel4IdFicheContact: -1, // from listMotifLevel4
  // affiche libelle d emotif niveau 4 dna sle champs motif des activites
  dateCreation: '',
  creePar: '',
  traiteePar: '',
  statutIndex: 1, // En-cours
  dateCloture: '',
  cloturePar: '',
  // libelle motif de niveau 4 a afficher dans motif
  canalIndexFicheActivite: 1,
  listAttachements: [],
  listCommenatire: []
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
      isFetchingFicheContact: true,
      isFetchingFicheActivite: true,
      lastFetchTimeFicheContact: action.time,
      lastFetchTimeFicheActivite: action.time,
      actionTime: action.time,

      contactId: action.contactId,
      benefId: action.benefId
    };

  case RECEIVED_GET_GEST_CONTACTS_FICHE_CONTACT:
    return {
      ...state,
      isFetchingFicheContact: false,
      isFetchingFicheActivite: false,
      lastFetchTimeFicheContact: action.time,
      lastFetchTimeFicheActivite: action.time,
      actionTime: action.time,

      // contactId may be null if creation
      dateCreationFicheContact: action.ficheContact && action.ficheContact.dateCreationFicheContact
        ? action.ficheContact.dateCreationFicheContact
        : initialState.dateCreationFicheContact,
      // benefId should always be returned (as id) since no contact possible without a benef
      creeParFicheContact: action.ficheContact && action.ficheContact.creeParFicheContact
        ? action.ficheContact.creeParFicheContact
        : initialState.creeParFicheContact,
      dateReceptionFicheContact: action.ficheContact && action.ficheContact.dateReceptionFicheContact
        ? action.ficheContact.dateReceptionFicheContact
        : initialState.dateReceptionFicheContact,
      statutIndexFicheContact: action.ficheContact && action.ficheContact.statutIndexFicheContact
        ? action.ficheContact.statutIndexFicheContact
        : initialState.statutIndexFicheContact,
      dateClotureFicheContact: action.ficheContact && action.ficheContact.dateClotureFicheContact
        ? action.ficheContact.dateClotureFicheContact
        : initialState.dateClotureFicheContact,
      clotureParFicheContact: action.ficheContact && action.ficheContact.clotureParFicheContact
        ? action.ficheContact.clotureParFicheContact
        : initialState.clotureParFicheContact,
      typeIndexFicheContact: action.ficheContact && action.ficheContact.typeIndexFicheContact
        ? action.ficheContact.typeIndexFicheContact
        : initialState.typeIndexFicheContact,
      canalIndexFicheContact: action.ficheContact && action.ficheContact.canalIndexFicheContact
        ? action.ficheContact.canalIndexFicheContact
        : initialState.canalIndexFicheContact,
      numDossierIndexSelected: action.ficheContact && action.ficheContact.numDossierIndexSelected
        ? action.ficheContact.numDossierIndexSelected
        : initialState.numDossierIndexSelected,
      listNumDossierFicheContact: action.ficheContact && action.ficheContact.listNumDossierFicheContact
        ? [...action.ficheContact.listNumDossierFicheContact]
        : [...initialState.listNumDossierFicheContact],
      domaineFicheContact: action.ficheContact && action.ficheContact.domaineFicheContact
        ? action.ficheContact.domaineFicheContact
        : initialState.domaineFicheContact,
      statutBenefFicheContact: action.ficheContact && action.ficheContact.statutBenefFicheContact
        ? action.ficheContact.statutBenefFicheContact
        : initialState.statutBenefFicheContact,
      attachmentsFicheContact: action.ficheContact && action.ficheContact.attachmentsFicheContact
        ? [...action.ficheContact.attachmentsFicheContact]
        : [...initialState.attachmentsFicheContact],
      commentaireFicheContact: action.ficheContact && action.ficheContact.commentaireFicheContact
        ? action.ficheContact.commentaireFicheContact
        : initialState.commentaireFicheContact,
      groupeDestinataireIsActive: action.ficheContact && action.ficheContact.groupeDestinataireIsActive
        ? action.ficheContact.groupeDestinataireIsActive
        : initialState.groupeDestinataireIsActive,
      groupeDestinataireIdSelected: action.ficheContact && action.ficheContact.groupeDestinataireIdSelected
        ? action.ficheContact.groupeDestinataireIdSelected
        : initialState.groupeDestinataireIdSelected,
      // dont forget to add initialState.defaultGroupeDestinataireValue as 1st element
      listGroupeDestinataire: action.ficheContact && action.ficheContact.listGroupeDestinataire
        ? [{...initialState.defaultGroupeDestinataireValue}, ...action.ficheContact.listGroupeDestinataire]
        : [...initialState.listGroupeDestinataire],
      activiteIdBeingEditing: action.ficheContact && action.ficheContact.activiteIdBeingEditing
        ? action.ficheContact.activiteIdBeingEditing
        : initialState.activiteIdBeingEditing,
      selectedActiviteId: action.ficheContact && action.ficheContact.selectedActiviteId
        ? action.ficheContact.selectedActiviteId
        : initialState.selectedActiviteId,
      activites: action.ficheContact && action.ficheContact.activites
        ? [...action.ficheContact.activites]
        : [...initialState.activites]
    };

  case ERROR_GET_GEST_CONTACTS_FICHE_CONTACT:
    return {
      ...state,
      isFetchingFicheContact: false,
      isFetchingFicheActivite: false,
      lastFetchTimeFicheContact: action.time,
      lastFetchTimeFicheActivite: action.time,
      actionTime: action.time,

      error: action.error
    };
  case UPDATE_GEST_CONTACTS_DATE_CREATION:
    return {
      ...state,
      dateCreationFicheContact: action.dateCreationFicheContact,
      actionTime: action.time
    };
  case UPDATE_GEST_CONTACTS_DATE_RECEPTION:
    return {
      ...state,
      dateReceptionFicheContact: action.dateReceptionFicheContact,
      actionTime: action.time
    };
  case UPDATE_GEST_CONTACTS_STATUT_FICHE:
    return {
      ...state,
      statutIndexFicheContact: action.statutIndexFicheContact,
      actionTime: action.time
    };
  case UPDATE_GEST_CONTACTS_DATE_CLOTURE:
    return {
      ...state,
      dateClotureFicheContact: action.dateClotureFicheContact,
      actionTime: action.time
    };
  case UPDATE_GEST_CONTACTS_TYPE_INDEX:
    return {
      ...state,
      typeIndexFicheContact: action.typeIndexFicheContact,
      actionTime: action.time
    };
  case UPDATE_GEST_CONTACTS_NUM_DOSSIER_INDEX:
    return {
      ...state,
      numDossierIndexSelected: action.numDossierIndexSelected,
      actionTime: action.time
    };
  case UPDATE_GEST_CONTACTS_DOMAINE_FICHE_CONTACT:
    return {
      ...state,
      domaineFicheContact: action.domaineFicheContact,
      actionTime: action.time
    };
  case UPDATE_GEST_CONTACTS_COMMENTAIRES_FICHE_CONTACT:
    return {
      ...state,
      commentaireFicheContact: action.commentaireFicheContact,
      actionTime: action.time
    };
  case UPDATE_GEST_CONTACTS_GROUPE_DEST_ID_FICHE_CONTACT:
    return {
      ...state,
      groupeDestinataireIdSelected: action.groupeDestinataireIdSelected,
      actionTime: action.time
    };

  case REQUEST_SAVE_GEST_CONTACTS_FICHE_CONTACT:
    return {
      ...state,
      isFetchingFicheContact: action.isFetchingFicheContact,
      isSavingFicheContact: action.isSavingFicheContact,
      actionTime: action.time
    };
  case RECEIVED_SAVE_GEST_CONTACTS_FICHE_CONTACT:
    return {
      ...state,
      isFetchingFicheContact: action.isFetchingFicheContact,
      isSavingFicheContact: action.isSavingFicheContact,
      actionTime: action.time
    };
  case ERROR_SAVE_GEST_CONTACTS_FICHE_CONTACT:
    return {
      ...state,
      isFetchingFicheContact: action.isFetchingFicheContact,
      isSavingFicheContact: action.isSavingFicheContact,
      error: action.error,
      actionTime: action.time
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

  // //////////////////////
  // list motifs reference
  // //////////////////////
  case REQUEST_GET_GEST_CONTACTS_ALL_MOTIFS:
    return {
      ...state,
      isFetchingAllMotifs: action.isFetchingAllMotifs,
      lastFetchTimeAllMotifs: action.time,
      actionTime: action.time
    };

  case RECEIVED_GET_GEST_CONTACTS_ALL_MOTIFS:
    return {
      ...state,
      isFetchingAllMotifs: action.isFetchingAllMotifs,
      lastFetchTimeAllMotifs: action.time,
      actionTime: action.time,

      listMotifLevel2: action.motifs && action.motifs.niveau2
        ? [...action.motifs.niveau2]
        : initialState.listMotifLevel2,
      listMotifLevel3: action.motifs && action.motifs.niveau3
        ? [...action.motifs.niveau3]
        : initialState.listMotifLevel3,
      listMotifLevel4: action.motifs && action.motifs.niveau4
        ? [...action.motifs.niveau4]
        : initialState.listMotifLevel4
    };

  case ERROR_GET_GEST_CONTACTS_ALL_MOTIFS:
    return {
      ...state,
      isFetchingAllMotifs: action.isFetchingAllMotifs,
      lastFetchTimeAllMotifs: action.time,
      actionTime: action.time,

      error: action.error
    };

  case REQUEST_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER:
    return {
      ...state,
      isFetchingBenefInfoFromNumDossier: true,

      actionTime: action.time
    };

  case RECEIVED_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER:
    return {
      ...state,
      isFetchingBenefInfoFromNumDossier: false,
      numDossierIndexSelected: action.benefInfos.numDossier,
      domaineFicheContact: action.benefInfos.domaine,
      statutBenefFicheContact: action.benefInfos.statut,
      actionTime: action.time
    };
  case ERROR_GET_GEST_CONTACTS_BENEF_INFO_FROM_NUM_DOSSIER:
    return {
      ...state,
      isFetchingBenefInfoFromNumDossier: false,
      actionTime: action.time,
      error: action.error
    };

  case REQUEST_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE:
    return {
      ...state,
      isFetchingFicheContactListMotifs: true,
      isSavingFicheNewActivite: true,

      activiteUpdateTime: action.time
    };

  case RECEIVED_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE:
    return {
      ...state,
      isFetchingFicheContactListMotifs: false,
      isSavingFicheNewActivite: false,
      activites: [...action.response],

      activiteUpdateTime: action.time
    };

  case ERROR_SAVE_GEST_CONTACTS_SAVE_NEW_ACTIVITE:
    return {
      ...state,
      isFetchingFicheContactListMotifs: false,
      isSavingFicheNewActivite: false,

      activiteUpdateTime: action.time
    };

  case ADD_NEW_COMBINAISON_MOTIS_CONTACTS_FICHE_CONTACT:
    return {
      ...state,
      actionTime: action.time,
      activites: [...state.activites, {...emptyActivite}]
    };

  case REMOVE_NEW_COMBINAISON_MOTIS_CONTACTS_FICHE_CONTACT:
    return {
      ...state,
      actionTime: action.time,
      activites: [...action.activites]
    };

  case ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_2:
  case ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_3:
  case ON_CHANGE_FICHE_CONTACT_MOTIF_NIVEAU_4:
    return {
      ...state,
      actionTime: action.time,
      activiteUpdateTime: action.time,
      activites: [...action.activites]
    };


  case REQUEST_SAVE_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT:
    return {
      ...state,
      isSavingFicheNewActiviteNewComment: true,
      activiteId: action.activiteId,
      comment: action.comment,

      actionTime: action.time
    };

  case RECEIVED_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT:
    return {
      ...state,
      isSavingFicheNewActiviteNewComment: false,
      activites: [...action.activites],

      actionTime: action.time
    };

  case ERROR_GET_GEST_CONTACTS_FICHE_ACTIVITE_NEW_COMMENT:
    return {
      ...state,
      isSavingFicheNewActiviteNewComment: false,

      actionTime: action.time
    };

  default:
    return state;
  }
};

export default gestContacts;
