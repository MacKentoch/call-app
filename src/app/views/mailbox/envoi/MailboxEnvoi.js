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
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leaveMailboxSentbox('test');
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
          inbox.length > 0 &&
          <MailboxListMails
            inboxMailName={inboxMailName}
            inbox={inbox}
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
      </div>
    );
  }
}

MailboxEnvoi.propTypes = {
  params: PropTypes.object, // react router
  location: PropTypes.object,  // react router

  actions: PropTypes.shape({
    enterMailboxSentbox: PropTypes.func,
    leaveMailboxSentbox: PropTypes.func
  })
};

export default MailboxEnvoi;
