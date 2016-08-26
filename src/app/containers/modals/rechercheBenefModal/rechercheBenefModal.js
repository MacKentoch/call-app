import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { RechercheBenefModal }  from '../../../views';

const mapStateToProps = (state) => {
  return {
    isOpened:  state.rechercheBenefModal.isOpened,

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
        hideRechercheBenefModal: actions.hideRechercheBenefModal,
        // search post:
        postSearchIfNeeded: actions.postSearchIfNeeded
      },
      dispatch)
  };
};

const RechercheBenefModalConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(RechercheBenefModal);

export default RechercheBenefModalConnected;
