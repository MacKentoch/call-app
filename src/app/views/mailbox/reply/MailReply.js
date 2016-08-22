import React, { PropTypes, Component }  from 'react';
import moment                           from 'moment';
// import { appConfig }                    from '../../../config';
import cx                               from 'classnames';
import {
  MailboxWriteMail
}                                       from '../../../components';

moment.locale('fr');
// const formatDate = appConfig.formatDate.defaut;

class MailReply extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      animated: true
    };

    this.handlesOnDestinatairesChange = this.handlesOnDestinatairesChange.bind(this);
    this.handlesOnSubjectChanged = this.handlesOnSubjectChanged.bind(this);
    this.handlesOnContentChanged = this.handlesOnContentChanged.bind(this);
    this.handlesOnCancel = this.handlesOnCancel.bind(this);
  }

  componentDidMount() {
    const  {  params: { mailboxId } } =  this.props;
    const { actions : { enterMailboxReplyMail, newMailInit } } = this.props;
    enterMailboxReplyMail(`mailbox #${mailboxId}`);
    newMailInit(mailboxId);
  }

  componentWillUnmount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.leaveMailboxReplyMail(`mailbox #${mailboxId}`);
  }

  render() {
    const { animated } = this.state;
    const { subject, to, body, attachments } = this.props;
    const { actions: { newMailAddAttachement, newMailRemoveAttachement } } = this.props;
    const { params: { mailboxId } } = this.props;

    return(
      <div
        className={cx({
          'animated': animated,
          'fadeIn': animated
        })}>
        <MailboxWriteMail
          mailboxId={mailboxId}

          destinataires={to}
          onDestinatairesChange={this.handlesOnDestinatairesChange}
          // mail subject
          subject={subject}
          onSubjectChanged={this.handlesOnSubjectChanged}
          // mail body
          content={body}
          onContentChanged={this.handlesOnContentChanged}
          // attachments
          attachments={attachments}
          addAttachement={newMailAddAttachement}
          removeAttachement={newMailRemoveAttachement}
          // actions
          onCancel={this.handlesOnCancel}
          onSend={()=>console.log('onSend should post new mail state content then reset it')}
        />
      </div>
    );
  }

  handlesOnDestinatairesChange(destinataires) {
    const { params: { mailboxId } } = this.props;
    const { actions: { newMailDestinatairesChange } } = this.props;
    newMailDestinatairesChange(mailboxId, destinataires);
  }

  handlesOnSubjectChanged(subject) {
    const { params: { mailboxId } } = this.props;
    const { actions: { newMailSubjectChange } } = this.props;
    newMailSubjectChange(mailboxId, subject);
  }

  handlesOnContentChanged(emailBody) {
    const { params: { mailboxId } } = this.props;
    const { actions: { newMailBodyChange } } = this.props;
    newMailBodyChange(mailboxId, emailBody);
  }

  handlesOnCancel() {
    const { router } = this.context;
    const { params: { mailboxId } } = this.props;
    const { actions: {newMailCancel} } = this.props;
    newMailCancel(mailboxId);
    // react-router v2.0.0+ && < v2.4.0+
    router.goBack();
  }
}

MailReply.propTypes = {
  // react router
  params: PropTypes.object,
  query: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
  // mail content:
  subject: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.array.isRequired,
  body: PropTypes.string.isRequired,
  hasAttachments: PropTypes.bool.isRequired,
  attachments: PropTypes.array.isRequired,
  // actions:
  actions: PropTypes.shape({
    enterMailboxReplyMail: PropTypes.func,
    leaveMailboxReplyMail: PropTypes.func,
    // write mail actions:
    replyMailInit: PropTypes.func,
    replyMailDestinatairesChange: PropTypes.func,
    replyMailSubjectChange: PropTypes.func,
    replyMailBodyChange: PropTypes.func,
    replyMailCancel: PropTypes.func,
    replyMailAddAttachement: PropTypes.func,
    replyMailRemoveAttachement: PropTypes.func
  })
};

MailReply.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default MailReply;
