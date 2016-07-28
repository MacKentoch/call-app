import React, { PropTypes, Component }  from 'react';
import moment                           from 'moment';
import { appConfig }                    from '../../../config';
import cx                               from 'classnames';
import {
  MailboxListMails,
  IsFetching
}                                       from '../../../components';
import {
  getCurrentPageContent
}                                       from '../../../services';

moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;
const mailBoxType = 'Envoyés';


class MailboxEnvoi extends Component {
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
      const nextPageMails = getCurrentPageContent(nextProps.inbox, currentPage, numberMailsPerPage);
      this.setState({ currentPageMails: nextPageMails });
    }
  }

  componentWillUnmount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.leaveMailboxSentbox(`mailbox #${mailboxId}`);
  }

  render() {
    const { animated, currentPageMails } = this.state;
    const { sentboxMailName, sentbox, sentboxIsFetching } = this.props;
    return(
      <div
        className={cx({
          'animated': animated,
          'fadeIn': animated
        })}>
        {
          (sentbox.length > 0 && !sentboxIsFetching) &&
          <MailboxListMails
            mailboxType={mailBoxType}
            mailBoxName={sentboxMailName}
            mails={currentPageMails}
            onRefreshListClick={this.handlesOnRefreshListClick}
            onPagingPreviousClick={()=>console.log('onPagingPreviousClick')}
            onPagingNextClick={()=>console.log('onPagingNextClick')}
            onSearch={(value)=>console.log('search: ', value)}
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
      body: PropTypes.string.isRequired,
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
