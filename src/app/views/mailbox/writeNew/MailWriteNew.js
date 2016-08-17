import React, { PropTypes, Component }  from 'react';
import moment                           from 'moment';
// import { appConfig }                    from '../../../config';
import cx                               from 'classnames';
import {
  MailboxWriteMail
}                                       from '../../../components';

moment.locale('fr');
// const formatDate = appConfig.formatDate.defaut;

class MailWriteNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };

    this.handlesOnSubjectChanged = this.handlesOnSubjectChanged.bind(this);
    this.handlesOnContentChanged = this.handlesOnContentChanged.bind(this);
  }

  componentDidMount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.enterMailboxWriteNew(`mailbox #${mailboxId}`);
  }

  componentWillUnmount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.leaveMailboxWriteNew(`mailbox #${mailboxId}`);
  }

  render() {
    const { animated } = this.state;
    const { subject, to, body, attachments } = this.props;

    return(
      <div
        className={cx({
          'animated': animated,
          'fadeIn': animated
        })}>
        <MailboxWriteMail
          destinataires={to}
          onDestinatiresChanged={()=>console.log('onDestinatiresChanged event')}
          subject={subject}
          onSubjectChanged={this.handlesOnSubjectChanged}
          content={body}
          onContentChanged={this.handlesOnContentChanged}
          attachments={attachments}
          onAttachmentsChanged={()=>console.log('onAttachmentsChanged event')}
          onCancel={()=>console.log('onCancel should remove new mail state content')}
          onSend={()=>console.log('onSend should post new mail state content then reset it')}
        />
      </div>
    );
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
}

MailWriteNew.propTypes = {
  // react router
  params: PropTypes.object,
  location: PropTypes.object,
  // mail content:
  subject: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.array.isRequired,
  body: PropTypes.string.isRequired,
  hasAttachments: PropTypes.bool.isRequired,
  attachments: PropTypes.array.isRequired,
  // actions:
  actions: PropTypes.shape({
    enterMailboxWriteNew: PropTypes.func,
    leaveMailboxWriteNew: PropTypes.func,
    // write mail actions:
    newMailAddDestinataire: PropTypes.func,
    newMailRemoveDestinataire: PropTypes.func,
    newMailSubjectChange: PropTypes.func,
    newMailBodyChange: PropTypes.func
  })
};

export default MailWriteNew;
