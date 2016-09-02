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
    // isFetching: state.gestBenef.isFetching,
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
        enterGestBeneficiaires: actions.enterGestBeneficiaires,
        leaveGestBeneficiaires: actions.leaveGestBeneficiaires,
        // get gestBenef:
        getGestBenefIfNeeded: actions.getGestBenefIfNeeded,
        // post
        postGestBenefIdentiteIfNeeded: actions.postGestBenefIdentiteIfNeeded,
        // UI: Identite
        setIsEditingIdentite: actions.setIsEditingIdentite,
        unsetIsEditingIdentite: actions.unsetIsEditingIdentite,
        setIsCollapsedIdentite: actions.setIsCollapsedIdentite,
        unsetIsCollapsedIdentite: actions.unsetIsCollapsedIdentite


      },
      dispatch)
  };
};

const GestBeneficiairesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(GestBeneficiaires);

export default GestBeneficiairesConnected;
