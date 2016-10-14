import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../redux/actions';
import { GestContacts }         from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,
    // general info
    lastActionTime: state.gestContacts.actionTime,
    // gestContacts data:
    isFetchingAll: state.gestContacts.isFetchingAll,

    contactId: state.gestContacts.contactId,
    benefId: state.gestContacts.benefId,
    // identité
    isFetchingIdentite: state.gestContacts.isFetchingIdentite,
    lastFetchTimeIdentite: state.gestContacts.lastFetchTimeIdentite,
    isCollapsedIdentite: state.gestContacts.isCollapsedIdentite,
    civilite: state.gestContacts.civilite,
    nom: state.gestContacts.nom,
    nomJeuneFille: state.gestContacts.nomJeuneFille,
    prenom: state.gestContacts.prenom,
    dateNaissance: state.gestContacts.dateNaissance,
    numss: state.gestContacts.numss,
    dateDeces: state.gestContacts.dateDeces,
    maritalStatus: state.gestContacts.maritalStatus,
    // contact data
    isFetchingContact: state.gestContacts.isFetchingContact,
    lastFetchTimeContact: state.gestContacts.lastFetchTimeContact,
    isCollapsedBenefContact: state.gestContacts.isCollapsedBenefContact,
    fixedPhone: state.gestContacts.fixedPhone,
    mobilePhone: state.gestContacts.mobilePhone,
    email: state.gestContacts.email,
    // contact data > sub: adress
    numAdress: state.gestContacts.numAdress,
    voie: state.gestContacts.voie,
    complementAdr: state.gestContacts.complementAdr,
    codePostal: state.gestContacts.codePostal,
    ville: state.gestContacts.ville,
    pays: state.gestContacts.pays,
    // dossiers:
    isFetchingDossiers: state.gestContacts.isFetchingDossiers,
    lastFetchTimeDossiers: state.gestContacts.lastFetchTimeDossiers,
    isCollapsedDossiers: state.gestContacts.isCollapsedDossiers,
    dossiers: state.gestContacts.dossiers,

    // lists motifs reference
    isFetchingAllMotifs: state.gestContacts.isFetchingAllMotifs, // fetch pour refresh de la liste des motifs de reference
    lastFetchTimeAllMotifs: state.gestContacts.lastFetchTimeAllMotifs,
    listMotifLevel2: state.gestContacts.listMotifLevel2, // enum to fetch from server: {id: number, libelle: string}
    listMotifLevel3: state.gestContacts.listMotifLevel3, // enum to fetch from server: {id: number, libelle: string}
    listMotifLevel4: state.gestContacts.listMotifLevel4, // enum to fetch from server: {id: number, libelle: string}

    // fiche contact
    isCollapsedFicheContact: state.gestContacts.isCollapsedFicheContact,
    lastFetchTimeFicheContact: state.gestContacts.lastFetchTimeFicheContact,
    isFetchingFicheContact: state.gestContacts.isFetchingFicheContact,
    isSavingFicheContact: state.gestContacts.isSavingFicheContact,

    dateCreationFicheContact: state.gestContacts.dateCreationFicheContact,
    creeParFicheContact: state.gestContacts.creeParFicheContact,
    dateReceptionFicheContact: state.gestContacts.dateReceptionFicheContact,

    statutIndexFicheContact: state.gestContacts.statutIndexFicheContact,
    listStatutFicheContact: state.gestContacts.listStatutFicheContact,

    dateClotureFicheContact: state.gestContacts.dateClotureFicheContact,
    clotureParFicheContact: state.gestContacts.clotureParFicheContact,

    typeIndexFicheContact: state.gestContacts.typeIndexFicheContact, // index par default du type de fiche contact de listTypeFicheContact
    listTypeFicheContact: state.gestContacts.listTypeFicheContact, // tous (enum) les types de fiche de contact

    canalIndexFicheContact: state.gestContacts.canalIndexFicheContact,
    listCanauxFicheContact: state.gestContacts.listCanauxFicheContact,

    numDossierIndexSelected: state.gestContacts.numDossierIndexSelected,
    listNumDossierFicheContact: state.gestContacts.listNumDossierFicheContact, // benef numDossiers list

    domaineFicheContact: state.gestContacts.domaineFicheContact,
    statutBenefFicheContact: state.gestContacts.statutBenefFicheContact,
    listStatutBenefFicheContact: state.gestContacts.listStatutBenefFicheContact,

    attachmentsFicheContact: state.gestContacts.attachmentsFicheContact,
    commentaireFicheContact: state.gestContacts.commentaireFicheContact,

    groupeDestinataireIsActive: state.gestContacts.groupeDestinataireIsActive,  // la list de choix doit être desactivée si statutIndexFicheContact <> En-cours
    groupeDestinataireIdSelected: state.gestContacts.groupeDestinataireIdSelected,
    listGroupeDestinataire: state.gestContacts.listGroupeDestinataire, // to fill from server query

    // fiche activites
    isCollapsedFicheActivite: state.gestContacts.isCollapsedFicheActivite,
    isFetchingFicheActivite: state.gestContacts.isFetchingFicheActivite,
    lastFetchTimeFicheActivite: state.gestContacts.lastFetchTimeFicheActivite,
    isSavingActivite: state.gestContacts.isSavingActivite,

    activiteIdBeingEditing: state.gestContacts.activiteIdBeingEditing,

    selectedActiviteId: state.gestContacts.selectedActiviteId,
    listCanauxFicheActivite: state.gestContacts.listCanauxFicheActivite,
    activites: state.gestContacts.activites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        // view:
        enterGestContacts: actions.enterGestContacts,
        leaveGestContacts: actions.leaveGestContacts,

        // notifications
        addNotificationMessage: actions.addNotificationMessage,

        // get gestContacts:
        getGestContactsIfNeeded: actions.getGestContactsIfNeeded,

        // //////////////////
        // identite
        // //////////////////
        // UI: Identite
        setIsCollapsedContactsIdentite: actions.setIsCollapsedContactsIdentite,
        unsetIsCollapsedContactsIdentite: actions.unsetIsCollapsedContactsIdentite,
        // //////////////////
        // contact (benef part)
        // //////////////////
        // UI: contact
        setIsCollapsedContactsBenefContact: actions.setIsCollapsedContactsBenefContact,
        unsetIsCollapsedContactsBenefContact: actions.unsetIsCollapsedContactsBenefContact,
        // /////////////////////
        // dossiers
        // /////////////////////
        // UI dossiers
        setIsCollapsedContactsDossiers: actions.setIsCollapsedContactsDossiers,
        unsetIsCollapsedContactsDossiers: actions.unsetIsCollapsedContactsDossiers,
        // ///////////////////////
        // contacts
        // ///////////////////////
        // get:
        getGestContactsFicheContactIfNeeded: actions.getGestContactsFicheContactIfNeeded,
        // ui
        setIsCollapsedContactsFicheContact: actions.setIsCollapsedContactsFicheContact,
        unsetIsCollapsedContactsFicheContact: actions.unsetIsCollapsedContactsFicheContact,
        // form updates:
        onDateCreationFicheContactChanged: actions.updateDateCreationFicheContact,
        onDateReceptionFicheContactChanged: actions.updateDateReceptionFicheContact,
        onStatutIndexFicheContactChanged: actions.updateStatutIndexFicheContact,
        onDateClotureFicheContactChanged: actions.updateDateClotureFicheContact,
        onTypeIndexFicheContactChanged: actions.updateTypeIndexFicheContact,
        onNumDossierIndexSelectedChanged: actions.updateNumDossierIndexSelected,
        onDomaineFicheContactChanged: actions.updateDomaineFicheContactChanged,
        // ///////////////////////
        // activites
        // ///////////////////////
        setIsCollapsedContactsFicheActivite: actions.setIsCollapsedContactsFicheActivite,
        unsetIsCollapsedContactsFicheActivite: actions.unsetIsCollapsedContactsFicheActivite,
        // ///////////////////////
        // lists motifs ref
        // ///////////////////////
        getGestContactsAllMotifsIfNeeded: actions.getGestContactsAllMotifsIfNeeded
      },
      dispatch)
  };
};

const GestContactsConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(GestContacts);

export default GestContactsConnected;
