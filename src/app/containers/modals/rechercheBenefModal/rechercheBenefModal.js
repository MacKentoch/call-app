import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { RechercheBenefModal }  from '../../../views';

const mapStateToProps = (state) => {
  return {
    isOpened:  state.rechercheBenefModal.isOpened
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        hideRechercheBenefModal: actions.hideRechercheBenefModal
      },
      dispatch)
  };
};

const RechercheBenefModalConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(RechercheBenefModal);

export default RechercheBenefModalConnected;
