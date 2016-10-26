import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { SelectMailBoxModal }   from '../../../views';

const mapStateToProps = (state) => {
  return {
    // userMailBoxesModal store
    isOpened:  state.selectBenefModal.isOpened,

    contactId:  state.selectBenefModal.contactId,
    typeContact: state.selectBenefModal.typeContact,

    // userBoitesMails store
    isFetching: state.userBoitesMails.isFetching,
    userMailsBoxes: state.userBoitesMails.data,
    lastRefreshTime: state.userBoitesMails.time
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        // userBoitesMails action creators:
        fetchUserBoitesMailsData: actions.fetchUserBoitesMailsData,

        // userMailBoxesModal actions creators
        hideSelectMailboxModal: actions.hideSelectMailboxModal
      },
      dispatch)
  };
};

const SelectMailBoxModalConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectMailBoxModal);

export default SelectMailBoxModalConnected;
