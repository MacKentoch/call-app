import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../redux/actions';
import { Mailbox }              from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,

    inboxNbUnRead: state.inboxContent.nbUnRead
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        fetchInboxContentIfNeeded: actions.fetchInboxContentIfNeeded
      },
      dispatch)
  };
};

const MailboxConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mailbox);

export default MailboxConnected;
