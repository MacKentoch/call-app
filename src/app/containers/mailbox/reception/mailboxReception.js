import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { MailboxReception }     from '../../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,

    inboxMailId: state.inboxContent.boiteMailId,
    inboxIsFetching: state.inboxContent.isFetching,
    inbox: state.inboxContent.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterMailboxInbox: actions.enterMailboxInbox,
        leaveMailboxInbox: actions.leaveMailboxInbox,

        fetchInboxContentIfNeeded: actions.fetchInboxContentIfNeeded
      },
      dispatch)
  };
};

const MailboxReceptionConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MailboxReception);

export default MailboxReceptionConnected;
