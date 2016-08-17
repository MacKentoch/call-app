import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { MailWriteNew }          from '../../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,
    // mail content:
    subject: state.writeNewMailContent.subject,
    from: state.writeNewMailContent.from,
    to: state.writeNewMailContent.to,
    body: state.writeNewMailContent.body,
    hasAttachments: state.writeNewMailContent.hasAttachments,
    attachments: state.writeNewMailContent.attachments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterMailboxWriteNew: actions.enterMailboxWriteNew,
        leaveMailboxWriteNew: actions.leaveMailboxWriteNew,
        // write new mail actions:
        newMailDestinatairesChange: actions.newMailDestinatairesChange,
        newMailSubjectChange: actions.newMailSubjectChange,
        newMailBodyChange: actions.newMailBodyChange,
        newMailCancel: actions.newMailCancel
      },
      dispatch)
  };
};

const MailWriteNewConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MailWriteNew);

export default MailWriteNewConnected;
