import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { MailConsult }          from '../../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,

    isFetchingMailContent: state.mailContent.isFetching,
    mailId: state.mailContent.mailId,
    boiteMailId: state.mailContent.boiteMailId,
    mail: state.mailContent.mail,
    mailContentRefreshTime: state.mailContent.time
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterMailboxConsult: actions.enterMailboxConsult,
        leaveMailboxConsult: actions.leaveMailboxConsult,

        fetchMailContentIfNeeded: actions.fetchMailContentIfNeeded
      },
      dispatch)
  };
};

const MailConsultConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MailConsult);

export default MailConsultConnected;
