import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { CreateNewDossierBenefModal }  from '../../../views';

const mapStateToProps = (state) => {
  return {
    isOpened: state.createNewDossierBenefModal.isOpened,
    lastActionTime: state.createNewDossierBenefModal.time,

    // saving flag:
    isSavingDossiers: state.gestBenef.isSavingDossiers,

    // benefId:
    benefId: state.createNewDossierBenefModal.benefId,

    // dossiers non editable fields:
    id: state.createNewDossierBenefModal.id,
    numDossier: state.createNewDossierBenefModal.numDossier,
    domaine: state.createNewDossierBenefModal.domaine,

    // dossiers editable fields:
    regime: state.createNewDossierBenefModal.regime,
    societe: state.createNewDossierBenefModal.societe,
    numSte: state.createNewDossierBenefModal.numSte,
    statutBenef: state.createNewDossierBenefModal.statutBenef,
    dateEntree: state.createNewDossierBenefModal.dateEntree,
    dateSortie: state.createNewDossierBenefModal.dateSortie,
    dateTauxPlein: state.createNewDossierBenefModal.dateTauxPlein
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
