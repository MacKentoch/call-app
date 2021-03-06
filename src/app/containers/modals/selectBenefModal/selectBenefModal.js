import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { SelectBenefModal }     from '../../../views';

const mapStateToProps = (state) => {
  return {
    isOpened:  state.selectBenefModal.isOpened,
    
    contactId:  state.selectBenefModal.contactId,
    typeContact: state.selectBenefModal.typeContact,

    searchFetching: state.search.isFetching,
    searchPayload:  state.search.searchPayload,
    searchResult:   state.search.searchResult,
    searchError:    state.search.error,
    searchTime:     state.search.time
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        hideSelectBenefModal: actions.hideSelectBenefModal,
        // search post:
        postSearchIfNeeded: actions.postSearchIfNeeded
      },
      dispatch)
  };
};

const SelectBenefModalConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectBenefModal);

export default SelectBenefModalConnected;
