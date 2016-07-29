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
  getCurrentPageContent,
  getMinIndex,
  getMaxIndex
}                                       from '../../../services';

moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;
const mailBoxType = 'Reçus';
const consultEmailPath = `/${appConfig.views.mailbox.root.path}/${appConfig.views.mailbox.consult.path}`;


class MailboxReception extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true,
      filter: '',
      currentPageMails: [],
      currentPage: 1,
      numberMailsPerPage: 2
    };

    this.handlesOnRefreshListClick = this.handlesOnRefreshListClick.bind(this);
    this.handlesOnPagingPreviousClick = this.handlesOnPagingPreviousClick.bind(this);
    this.handlesOnPagingNextClick = this.handlesOnPagingNextClick.bind(this);
    this.handlesOnSearch = this.handlesOnSearch.bind(this);
  }

  componentDidMount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.enterMailboxInbox(`mailbox #${mailboxId}`);
    actions.fetchInboxContentIfNeeded(mailboxId);
  }

  componentWillReceiveProps(nextProps) {
    const { inboxRefreshTime } = this.props;
    const { currentPage, numberMailsPerPage, filter } = this.state;

    const lastRefreshTime = inboxRefreshTime.length > 0
      ? moment(inboxRefreshTime, formatDate).format(formatDate)
      : moment('01/01/1900-00:00:01', formatDate).format(formatDate);

    const newRefreshTime = nextProps.inboxRefreshTime.length > 0
      ? moment(nextProps.inboxRefreshTime, formatDate).format(formatDate)
      : moment('01/01/1900-00:00:01', formatDate).format(formatDate);

    if (lastRefreshTime < newRefreshTime) {
      const nextPageMails = getCurrentPageContent(nextProps.inbox, currentPage, numberMailsPerPage, filter);
      this.setState({ currentPageMails: nextPageMails });
    }
  }

  componentWillUnmount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.leaveMailboxInbox(`mailbox #${mailboxId}`);
  }

  render() {
    const { animated, currentPageMails, currentPage, numberMailsPerPage } = this.state;
    const { inboxMailName, inbox, inboxIsFetching, params: { mailboxId } } = this.props;

    const minPage = getMinIndex(inbox, currentPage, numberMailsPerPage);
    const maxPage= getMaxIndex(inbox, currentPage, numberMailsPerPage);

    return(
      <div
        className={cx({
          'animated': animated,
          'fadeIn': animated
        })}>
        {
          (inbox.length > 0 && !inboxIsFetching) &&
          <MailboxListMails
            mailboxId={mailboxId}
            mailboxType={mailBoxType}
            mailBoxName={inboxMailName}
            mails={currentPageMails}

            consultLinkTo={`${consultEmailPath}`}

            minPage={minPage}
            maxPage={maxPage}
            totalMails={inbox.length}

            onRefreshListClick={this.handlesOnRefreshListClick}
            onPagingPreviousClick={this.handlesOnPagingPreviousClick}
            onPagingNextClick={this.handlesOnPagingNextClick}
            onSearch={this.handlesOnSearch}
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

  handlesOnPagingPreviousClick(event) {
    event.preventDefault();

    const { inbox } = this.props;
    const { currentPage, numberMailsPerPage, filter } = this.state;

    const previousPage = currentPage - 1 > 0 ? currentPage - 1 : currentPage;

    const nextPageMails = getCurrentPageContent(inbox, previousPage, numberMailsPerPage, filter);
    this.setState({
      currentPageMails: nextPageMails,
      currentPage: previousPage
    });
  }

  handlesOnPagingNextClick(event) {
    event.preventDefault();

    const { inbox } = this.props;
    const { currentPage, numberMailsPerPage, filter } = this.state;

    const totalMails = inbox.length;
    const pageMax = Math.ceil(totalMails / numberMailsPerPage);
    const nextPage = currentPage + 1 <= pageMax ? currentPage + 1 : currentPage;

    const nextPageMails = getCurrentPageContent(inbox, nextPage, numberMailsPerPage, filter);
    this.setState({
      currentPageMails: nextPageMails,
      currentPage: nextPage
    });
  }

  handlesOnSearch(filter) {
    const { inbox } = this.props;
    const { currentPage, numberMailsPerPage } = this.state;

    const currentPageMailsFiltered = getCurrentPageContent(inbox, currentPage, numberMailsPerPage, filter);

    this.setState({
      currentPageMails: currentPageMailsFiltered,
      filter
    });
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
