import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../redux/actions';
import { GestBeneficiaires }    from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,
    // general info
    lastActionTime: state.gestBenef.actionTime,
    // gestBenef data:
    isFetchingAll: state.gestBenef.isFetchingAll,
    // lastGetTime: state.gestBenef.time,
    id: state.gestBenef.id,
    // identité
    isFetchingIdentite: state.gestBenef.isFetchingIdentite,
    lastFetchTimeIdentite: state.gestBenef.lastFetchTimeIdentite,
    isEditingIdentite: state.gestBenef.isEditingIdentite,
    isSavingIdentite: state.gestBenef.isSavingIdentite,
    isCollapsedIdentite: state.gestBenef.isCollapsedIdentite,
    civilite: state.gestBenef.civilite,
    nom: state.gestBenef.nom,
    nomJeuneFille: state.gestBenef.nomJeuneFille,
    prenom: state.gestBenef.prenom,
    dateNaissance: state.gestBenef.dateNaissance,
    numss: state.gestBenef.numss,
    dateDeces: state.gestBenef.dateDeces,
    maritalStatus: state.gestBenef.maritalStatus,
    // contact data
    isFetchingContact: state.gestBenef.isFetchingContact,
    lastFetchTimeContact: state.gestBenef.lastFetchTimeContact,
    isEditingContact: state.gestBenef.isEditingContact,
    isSavingContact: state.gestBenef.isSavingContact,
    isCollapsedContact: state.gestBenef.isCollapsedContact,
    fixedPhone: state.gestBenef.fixedPhone,
    mobilePhone: state.gestBenef.mobilePhone,
    email: state.gestBenef.email,
    // contact data > sub: adress
    numAdress: state.gestBenef.numAdress,
    voie: state.gestBenef.voie,
    complementAdr: state.gestBenef.complementAdr,
    codePostal: state.gestBenef.codePostal,
    ville: state.gestBenef.ville,
    pays: state.gestBenef.pays,
    // dossiers:
    isFetchingDossiers: state.gestBenef.isFetchingDossiers,
    lastFetchTimeDossiers: state.gestBenef.lastFetchTimeDossiers,
    isEditingDossiers: state.gestBenef.isEditingDossiers,
    isSavingDossiers: state.gestBenef.isSavingDossiers,
    isCollapsedDossiers: state.gestBenef.isCollapsedDossiers,
    dossiers: state.gestBenef.dossiers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        // view:
        enterGestBeneficiaires: actions.enterGestBeneficiaires,
        leaveGestBeneficiaires: actions.leaveGestBeneficiaires,
        // notifications
        addNotificationMessage: actions.addNotificationMessage,
        // get gestBenef:
        getGestBenefIfNeeded: actions.getGestBenefIfNeeded,
        // reset:
        resetGestBenef: actions.resetGestBenef,
        // //////////////////
        // identite
        // /////////////////
        // get
        getGestBenefIdentiteIfNeeded: actions.getGestBenefIdentiteIfNeeded,
        // post
        postGestBenefIdentiteIfNeeded: actions.postGestBenefIdentiteIfNeeded,
        // UI: Identite
        setIsEditingIdentite: actions.setIsEditingIdentite,
        unsetIsEditingIdentite: actions.unsetIsEditingIdentite,
        setIsCollapsedIdentite: actions.setIsCollapsedIdentite,
        unsetIsCollapsedIdentite: actions.unsetIsCollapsedIdentite,
        updateCiviliteIdentite: actions.updateCiviliteIdentite,
        updateNomIdentite: actions.updateNomIdentite,
        updateNomDeJeuneFilleIdentite: actions.updateNomDeJeuneFilleIdentite,
        updatePrenomIdentite: actions.updatePrenomIdentite,
        updateDateNaissanceIdentite: actions.updateDateNaissanceIdentite,
        updateNumssIdentite: actions.updateNumssIdentite,
        updateDateDecesIdentite: actions.updateDateDecesIdentite,
        updateMaritalStatusIdentite: actions.updateMaritalStatusIdentite,
        // //////////////////
        // contact
        // /////////////////
        // get
        getGestBenefContactIfNeeded: actions.getGestBenefContactIfNeeded,
        // post
        postGestBenefContactIfNeeded: actions.postGestBenefContactIfNeeded,
        // UI: contact
        setIsEditingContact: actions.setIsEditingContact,
        unsetIsEditingContact: actions.unsetIsEditingContact,
        setIsCollapsedContact: actions.setIsCollapsedContact,
        unsetIsCollapsedContact: actions.unsetIsCollapsedContact,
        updateTelephoneFixeContact: actions.updateTelephoneFixeContact,
        updateTelephoneMobileContact: actions.updateTelephoneMobileContact,
        updateEmailContact: actions.updateEmailContact,
        updateNumAdressNumber: actions.updateNumAdressNumber,
        updateVoieAdressContact: actions.updateVoieAdressContact,
        updateComplementAdressContact: actions.updateComplementAdressContact,
        updateCodePostalContact: actions.updateCodePostalContact,
        updateVilleContact: actions.updateVilleContact,
        updatePaysContact: actions.updatePaysContact
      },
      dispatch)
  };
};

const GestBeneficiairesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(GestBeneficiaires);

export default GestBeneficiairesConnected;
