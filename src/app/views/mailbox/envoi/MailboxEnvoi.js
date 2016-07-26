import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
import {
  MailboxListMails
}                                       from '../../../components';


class MailboxEnvoi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.enterMailboxSentbox(`mailbox #${mailboxId}`);
    actions.fetchSentboxContentIfNeeded(mailboxId);
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leaveMailboxSentbox('test');
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
          sentbox.length > 0 &&
          <MailboxListMails
            inboxMailName={sentboxMailName}
            inbox={sentbox}
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
      </div>
    );
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
