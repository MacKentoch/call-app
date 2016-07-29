import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
import {
  MailboxRepertoires,
  MailBoxNewEmailButton
}                                       from '../../components';
import { appConfig }                    from '../../config';

const boiteReceptionPath  = `/${appConfig.views.mailbox.root.path}/${appConfig.views.mailbox.reception.path}`;
const boiteEnvoiPath      = `/${appConfig.views.mailbox.root.path}/${appConfig.views.mailbox.envoi.path}`;
const writeNewEmailPath   = `/${appConfig.views.mailbox.root.path}/${appConfig.views.mailbox.writeNew.path}`;
const mailBoxButtonTextRediger = 'Rédiger un email';
const mailBoxButtonTextRetour = 'Retour à la boîte mail';

const inboxRegex = /reception/;
const sentboxRegex = /envoi/;
const writeNewmailRegex = /writeNew/;

class MailBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.fetchInboxContentIfNeeded(mailboxId);
  }

  render() {
    const { animated } = this.state;
    const { children, params: { mailboxId }, location: { pathname }, inboxNbUnRead } = this.props;

    const isInbox   = inboxRegex.test(pathname);
    const isSentBox = sentboxRegex.test(pathname);
    const isWritingNewEmail = writeNewmailRegex.test(pathname);

    let selectedView = '';
    if (isInbox) {
      selectedView = 'inbox';
    }
    if (isSentBox) {
      selectedView = 'sentbox';
    }

    return(
      <section
        className={cx({
          'content':        true,
          'animatedViews':  animated,
          'view-enter':     animated
        })}>
        <div
          className="row"
          style={{marginBottom: '5px'}}>
          <div className="col-md-3 no-print">
            <MailBoxNewEmailButton
              text={isWritingNewEmail ? mailBoxButtonTextRetour : mailBoxButtonTextRediger}
              linkTo={isWritingNewEmail ? `${boiteReceptionPath}/${mailboxId}` : `${writeNewEmailPath}/${mailboxId}`}
            />

            <MailboxRepertoires
              inboxNbUnRead={inboxNbUnRead}
              selectedView={selectedView}
              recuLink={`${boiteReceptionPath}/${mailboxId}`}
              envoyeLink={`${boiteEnvoiPath}/${mailboxId}`}
            />
          </div>

          <div className="col-md-9">
            {children}
          </div>
        </div>
      </section>
    );
  }
}

MailBox.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object, // react router
  location: PropTypes.object,  // react router

  currentView: PropTypes.string.isRequired,

  inboxNbUnRead: PropTypes.number.isRequired,

  actions: PropTypes.shape({
    fetchInboxContentIfNeeded: PropTypes.func
  })
};

export default MailBox;
