import React, { PropTypes, Component }  from 'react';
import moment                           from 'moment';
import { appConfig }                    from '../../../config';
import cx                               from 'classnames';
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
const mailBoxType = 'Envoyés';
const consultEmailPath = `/${appConfig.views.mailbox.root.path}/${appConfig.views.mailbox.consult.path}`;


class MailboxEnvoi extends Component {
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
    actions.enterMailboxSentbox(`mailbox #${mailboxId}`);
    actions.fetchSentboxContentIfNeeded(mailboxId);
  }

  componentWillReceiveProps(nextProps) {
    const { sentboxRefreshTime } = this.props;
    const { currentPage, numberMailsPerPage } = this.state;

    const lastRefreshTime = sentboxRefreshTime.length > 0
      ? moment(sentboxRefreshTime, formatDate).format(formatDate)
      : moment('01/01/1900-00:00:01', formatDate).format(formatDate);

    const newRefreshTime = nextProps.sentboxRefreshTime.length > 0
      ? moment(nextProps.sentboxRefreshTime, formatDate).format(formatDate)
      : moment('01/01/1900-00:00:01', formatDate).format(formatDate);

    if (lastRefreshTime < newRefreshTime) {
      const nextPageMails = getCurrentPageContent(nextProps.sentbox, currentPage, numberMailsPerPage);
      this.setState({ currentPageMails: nextPageMails });
    }
  }

  componentWillUnmount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.leaveMailboxSentbox(`mailbox #${mailboxId}`);
  }

  render() {
    const { animated, currentPageMails, currentPage, numberMailsPerPage } = this.state;
    const { sentboxMailName, sentbox, sentboxIsFetching, params: { mailboxId } } = this.props;

    const minPage = getMinIndex(sentbox, currentPage, numberMailsPerPage);
    const maxPage= getMaxIndex(sentbox, currentPage, numberMailsPerPage);

    return(
      <div
        className={cx({
          'animated': animated,
          'fadeIn': animated
        })}>
        {
          (sentbox.length > 0 && !sentboxIsFetching) &&
          <MailboxListMails
            mailboxId={mailboxId}
            mailboxType={mailBoxType}
            mailBoxName={sentboxMailName}
            mails={currentPageMails}

            consultLinkTo={`${consultEmailPath}`}

            minPage={minPage}
            maxPage={maxPage}
            totalMails={sentbox.length}

            onRefreshListClick={this.handlesOnRefreshListClick}
            onPagingPreviousClick={this.handlesOnPagingPreviousClick}
            onPagingNextClick={this.handlesOnPagingNextClick}
            onSearch={this.handlesOnSearch}
          />
        }
        {
          (sentbox.length === 0 && !sentboxIsFetching) &&
          <h3>
            <i>
              Aucun mail.
            </i>
          </h3>
        }
        {
          sentboxIsFetching &&
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
    actions.fetchSentboxContentIfNeeded(mailboxId);
  }

  handlesOnPagingPreviousClick(event) {
    event.preventDefault();

    const { sentbox } = this.props;
    const { currentPage, numberMailsPerPage } = this.state;

    const previousPage = currentPage - 1 > 0 ? currentPage - 1 : currentPage;

    const nextPageMails = getCurrentPageContent(sentbox, previousPage, numberMailsPerPage);
    this.setState({
      currentPageMails: nextPageMails,
      currentPage: previousPage
    });
  }

  handlesOnPagingNextClick(event) {
    event.preventDefault();

    const { sentbox } = this.props;
    const { currentPage, numberMailsPerPage } = this.state;

    const totalMails = sentbox.length;
    const pageMax = Math.ceil(totalMails / numberMailsPerPage);
    const nextPage = currentPage + 1 <= pageMax ? currentPage + 1 : currentPage;

    const nextPageMails = getCurrentPageContent(sentbox, nextPage, numberMailsPerPage);
    this.setState({
      currentPageMails: nextPageMails,
      currentPage: nextPage
    });
  }

  handlesOnSearch(filter) {
    const { sentbox } = this.props;
    const { currentPage, numberMailsPerPage } = this.state;

    const currentPageMailsFiltered = getCurrentPageContent(sentbox, currentPage, numberMailsPerPage, filter);

    this.setState({
      currentPageMails: currentPageMailsFiltered,
      filter
    });
  }
}

MailboxEnvoi.propTypes = {
  params: PropTypes.object, // react router
  location: PropTypes.object,  // react router

  sentboxMailId: PropTypes.number,
  sentboxMailName: PropTypes.string,
  sentboxIsFetching: PropTypes.bool,
  sentboxRefreshTime: PropTypes.string,
  sentbox: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      receptionDate: PropTypes.string.isRequired,
      notRead: PropTypes.bool.isRequired,
      subject: PropTypes.string.isRequired,
      from: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
      }).isRequired,
      to: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
      }).isRequired,
      hasAttachments: PropTypes.bool.isRequired,
      selected: PropTypes.bool.isRequired
    })
  ),

  actions: PropTypes.shape({
    enterMailboxSentbox: PropTypes.func,
    leaveMailboxSentbox: PropTypes.func,

    fetchSentboxContentIfNeeded: PropTypes.func
  })
};

export default MailboxEnvoi;
