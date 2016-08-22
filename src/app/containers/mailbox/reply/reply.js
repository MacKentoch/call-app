import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { MailReply }            from '../../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,
    // mail content:
    subject: state.replyMailContent.subject,
    from: state.replyMailContent.from,
    to: state.replyMailContent.to,
    body: state.replyMailContent.body,
    hasAttachments: state.replyMailContent.hasAttachments,
    attachments: state.replyMailContent.attachments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterMailboxReplyMail: actions.enterMailboxReplyMail,
        leaveMailboxReplyMail: actions.leaveMailboxReplyMail,
        // write new mail actions:
        replyMailInit: actions.replyMailInit,
        replyMailDestinatairesChange: actions.replyMailDestinatairesChange,
        replyMailSubjectChange: actions.replyMailSubjectChange,
        replyMailBodyChange: actions.replyMailBodyChange,
        replyMailCancel: actions.replyMailCancel,
        replyMailAddAttachement: actions.replyMailAddAttachement,
        replyMailRemoveAttachement: actions.replyMailRemoveAttachement
      },
      dispatch)
  };
};

const MailReplyConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MailReply);

export default MailReplyConnected;
