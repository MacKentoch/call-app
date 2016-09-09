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
        hideRechercheBenefModal: actions.hideRechercheBenefModal,
        // search post:
        postSearchIfNeeded: actions.postSearchIfNeeded
      },
      dispatch)
  };
};

const CreateNewDossierBenefModalConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewDossierBenefModal);

export default CreateNewDossierBenefModalConnected;
