import React, { PropTypes, Component }  from 'react';
import moment                           from 'moment';
import { appConfig }                    from '../../../config';
import cx                               from 'classnames';
// import { appConfig }                    from '../../config';
import {
  MailboxListMails,
  IsFetching
}                                       from '../../../components';
import {
  getCurrentPageContent
}                                       from '../../../services';

moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;
const mailBoxType = 'Reçus';


class MailboxReception extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true,
      currentPageMails: [],
      currentPage: 1,
      numberMailsPerPage: 50
    };

    this.handlesOnRefreshListClick = this.handlesOnRefreshListClick.bind(this);
  }

  componentDidMount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.enterMailboxInbox(`mailbox #${mailboxId}`);
    actions.fetchInboxContentIfNeeded(mailboxId);
  }

  componentWillReceiveProps(nextProps) {
    const { inboxRefreshTime } = this.props;
    const { currentPage, numberMailsPerPage } = this.state;

    const lastRefreshTime = inboxRefreshTime.length > 0
      ? moment(inboxRefreshTime, formatDate).format(formatDate)
      : moment('01/01/1900-00:00:01', formatDate).format(formatDate);

    const newRefreshTime = nextProps.inboxRefreshTime.length > 0
      ? moment(nextProps.inboxRefreshTime, formatDate).format(formatDate)
      : moment('01/01/1900-00:00:01', formatDate).format(formatDate);

    if (lastRefreshTime < newRefreshTime) {
      const nextPageMails = getCurrentPageContent(nextProps.inbox, currentPage, numberMailsPerPage);
      this.setState({ currentPageMails: nextPageMails });
    }
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
  inboxRefreshTime: PropTypes.string,
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
