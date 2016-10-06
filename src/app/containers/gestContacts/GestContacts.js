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
    // lastGetTime: state.gestContacts.time,
    id: state.gestContacts.id,
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
    isCollapsedContact: state.gestContacts.isCollapsedContact,
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
    dossiers: state.gestContacts.dossiers
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
        getGestContactsIfNeeded: actions.getGestBenefIfNeeded,
        // //////////////////
        // identite
        // //////////////////
        // UI: Identite
        setIsCollapsedIdentite: actions.setIsCollapsedIdentite,
        unsetIsCollapsedIdentite: actions.unsetIsCollapsedIdentite,
        // //////////////////
        // contact
        // //////////////////
        // UI: contact
        setIsCollapsedContact: actions.setIsCollapsedContact,
        unsetIsCollapsedContact: actions.unsetIsCollapsedContact,
        // /////////////////////
        // dossiers
        // /////////////////////
        // UI dossiers
        setIsCollapsedDossiers: actions.setIsCollapsedDossiers,
        unsetIsCollapsedDossiers: actions.unsetIsCollapsedDossiers,
        // ///////////////////////
        // contacts (TO ADD)
        // ///////////////////////


        // ///////////////////////
        // activites (TO ADD)
        // ///////////////////////
      },
      dispatch)
  };
};

const GestContactsConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(GestContacts);

export default GestContactsConnected;
