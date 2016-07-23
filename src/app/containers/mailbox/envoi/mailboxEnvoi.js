import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { MailboxEnvoi }         from '../../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterMailboxSentbox: actions.enterMailboxSentbox,
        leaveMailboxSentbox: actions.leaveMailboxSentbox
      },
      dispatch)
  };
};

const MailboxEnvoiConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MailboxEnvoi);

export default MailboxEnvoiConnected;
