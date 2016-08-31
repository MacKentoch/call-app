import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../redux/actions';
import { GestBeneficiaires }    from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,
    // gestBenef data:
    isFetching: state.gestBenef.isFetching,
    lastGetTime: state.gestBenef.time,
    // identité
    civilite: state.gestBenef.civilite,
    nom: state.gestBenef.nom,
    nomJeuneFille: state.gestBenef.nomJeuneFille,
    prenom: state.gestBenef.prenom,
    dateNaissance: state.gestBenef.dateNaissance,
    numss: state.gestBenef.numss,
    dateDeces: state.gestBenef.dateDeces,
    maritalStatus: state.gestBenef.maritalStatus,
    // contact data
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
        getGestBenefIfNeeded: actions.getGestBenefIfNeeded
      },
      dispatch)
  };
};

const GestBeneficiairesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(GestBeneficiaires);

export default GestBeneficiairesConnected;
