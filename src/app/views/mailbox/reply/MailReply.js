import React, { PropTypes, Component }  from 'react';
import moment                           from 'moment';
// import { appConfig }                    from '../../../config';
import cx                               from 'classnames';
import {
  MailboxReplyMail
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
    const { params: { mailboxId } } = this.props;
    const  { location: {query: { mailId } } } =  this.props;
    const { actions : { enterMailboxReplyMail, replyMailInit } } = this.props;
    enterMailboxReplyMail(`mailbox #${mailboxId}`, mailId);
    replyMailInit(mailboxId, mailId);
  }

  componentWillUnmount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.leaveMailboxReplyMail(`mailbox #${mailboxId}`);
  }

  render() {
    const { animated } = this.state;
    const { subject, to, body, attachments } = this.props;
    const { actions: { replyMailAddAttachement, replyMailRemoveAttachement } } = this.props;
    const  { location: {query: { mailId } } } =  this.props;
    const { params: { mailboxId } } = this.props;

    return(
      <div
        className={cx({
          'animated': animated,
          'fadeIn': animated
        })}>
        <MailboxReplyMail
          mailboxId={mailboxId}
          mailId={mailId}

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
          addAttachement={replyMailAddAttachement}
          removeAttachement={replyMailRemoveAttachement}
          // actions
          onCancel={this.handlesOnCancel}
          onSend={()=>console.log('onSend should post new mail state content then reset it')}
        />
      </div>
    );
  }

  handlesOnDestinatairesChange(destinataires) {
    const { params: { mailboxId } } = this.props;
    const { actions: { replyMailDestinatairesChange } } = this.props;
    replyMailDestinatairesChange(mailboxId, destinataires);
  }

  handlesOnSubjectChanged(subject) {
    const { params: { mailboxId } } = this.props;
    const { actions: { replyMailSubjectChange } } = this.props;
    replyMailSubjectChange(mailboxId, subject);
  }

  handlesOnContentChanged(emailBody) {
    const { params: { mailboxId } } = this.props;
    const { actions: { replyMailBodyChange } } = this.props;
    replyMailBodyChange(mailboxId, emailBody);
  }

  handlesOnCancel() {
    const { router } = this.context;
    const { params: { mailboxId } } = this.props;
    const { actions: {replyMailCancel} } = this.props;
    const  { location: {query: { mailId } } } =  this.props;
    replyMailCancel(mailboxId, mailId);
    // react-router v2.0.0+ && < v2.4.0+
    router.goBack();
  }
}

MailReply.propTypes = {
  // react router
  params: PropTypes.object,
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
