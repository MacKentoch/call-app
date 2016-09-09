import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { CreateNewDossierBenefModal }  from '../../../views';

const mapStateToProps = (state) => {
  return {
    isOpened:  state.rechercheBenefModal.isOpened,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        // hide modal
        hideNewBenefDossierModal: actions.hideNewBenefDossierModal,

        // update fields:
        updateRegimeNewBenefDossier: actions.updateRegimeNewBenefDossier,
        updateSocieteNewBenefDossier: actions.updateSocieteNewBenefDossier,
        updateNumSteNewBenefDossier: actions.updateNumSteNewBenefDossier,
        updateStatutBenefNewBenefDossier: actions.updateStatutBenefNewBenefDossier,
        updateDateEntreeNewBenefDossier: actions.updateDateEntreeNewBenefDossier,
        updateDateSortieNewBenefDossier: actions.updateDateSortieNewBenefDossier,
        updateDateTauxPleinNewBenefDossier: actions.updateDateTauxPleinNewBenefDossier,

        // save new benef dossier needs inputs: benefId, newDossier
        addGestBenefNewDossierIfNeeded: actions.addGestBenefNewDossierIfNeeded
      },
      dispatch)
  };
};

const CreateNewDossierBenefModalConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewDossierBenefModal);

export default CreateNewDossierBenefModalConnected;
