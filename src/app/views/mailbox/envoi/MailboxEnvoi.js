import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
import {
  MailboxListMails,
  IsFetching
}                                       from '../../../components';

const mailBoxType = 'Envoyés';

class MailboxEnvoi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };

    this.handlesOnRefreshListClick = this.handlesOnRefreshListClick.bind(this);
  }

  componentDidMount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.enterMailboxSentbox(`mailbox #${mailboxId}`);
    actions.fetchSentboxContentIfNeeded(mailboxId);
  }

  componentWillUnmount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.leaveMailboxSentbox(`mailbox #${mailboxId}`);
  }

  render() {
    const { animated } = this.state;
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
            mails={sentbox}
            onRefreshListClick={this.handlesOnRefreshListClick}
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
