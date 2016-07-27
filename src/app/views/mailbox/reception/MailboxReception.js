import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
// import { appConfig }                    from '../../config';
import {
  MailboxListMails,
  IsFetching
}                                       from '../../../components';

const mailBoxType = 'Reçus';

class MailboxReception extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };

    this.handlesOnRefreshListClick = this.handlesOnRefreshListClick.bind(this);
  }

  componentDidMount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.enterMailboxInbox(`mailbox #${mailboxId}`);
    actions.fetchInboxContentIfNeeded(mailboxId);
  }

  componentWillUnmount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.leaveMailboxInbox(`mailbox #${mailboxId}`);
  }

  render() {
    const { animated } = this.state;
    const { inboxMailName, inbox, inboxIsFetching } = this.props;
    return(
      <div
        className={cx({
          'animated': animated,
          'fadeIn': animated
        })}>
        {
          (inbox.length > 0 && !inboxIsFetching) &&
          <MailboxListMails
            mailboxType={mailBoxType}
            mailBoxName={inboxMailName}
            mails={inbox}
            onRefreshListClick={this.handlesOnRefreshListClick}
          />
        }
        {
          (inbox.length === 0 && !inboxIsFetching) &&
          <h3>
            <i>
              Aucun mail.
            </i>
          </h3>
        }
        {
          inboxIsFetching &&
          <div>
            <p className="text-center">
              <i style={{color: '#4A4A4A'}}>
                Chargement...
              </i>
            </p>
            <IsFetching />
          </div>
        }
      </div>
    );
  }

  handlesOnRefreshListClick(event) {
    event.preventDefault();
    const  { actions, params: { mailboxId } } =  this.props;
    actions.fetchInboxContentIfNeeded(mailboxId);
  }
}

MailboxReception.propTypes = {
  params: PropTypes.object, // react router
  location: PropTypes.object,  // react router

  inboxMailId: PropTypes.number,
  inboxMailName: PropTypes.string,
  inboxIsFetching: PropTypes.bool,
  inbox: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      notRead: PropTypes.bool.isRequired,
      receptionDate: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      from: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
      }).isRequired,
      to: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
      }).isRequired,
      body: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    })
  ),
  actions: PropTypes.shape({
    enterMailboxInbox: PropTypes.func,
    leaveMailboxInbox: PropTypes.func,
    fetchInboxContentIfNeeded: PropTypes.func
  })
};

export default MailboxReception;
