import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { MailConsult }          from '../../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterMailboxInbox: actions.enterMailboxInbox,
        leaveMailboxInbox: actions.leaveMailboxInbox
      },
      dispatch)
  };
};

const MailConsultConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MailConsult);

export default MailConsultConnected;
