import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { MailboxEnvoi }         from '../../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,

    sentboxMailId: state.sentboxContent.boiteMailId,
    sentboxMailName: state.sentboxContent.mailBoxName,
    sentboxIsFetching: state.sentboxContent.isFetching,
    sentbox: state.sentboxContent.mails
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterMailboxSentbox: actions.enterMailboxSentbox,
        leaveMailboxSentbox: actions.leaveMailboxSentbox,

        fetchSentboxContentIfNeeded: actions.fetchSentboxContentIfNeeded
      },
      dispatch)
  };
};

const MailboxEnvoiConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MailboxEnvoi);

export default MailboxEnvoiConnected;
