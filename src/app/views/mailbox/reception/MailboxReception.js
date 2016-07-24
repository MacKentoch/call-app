import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
// import { appConfig }                    from '../../config';


class MailboxReception extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.enterMailboxInbox(`mailbox #${mailboxId}`);
    actions.fetchInboxContentIfNeeded(mailboxId);
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leaveMailboxInbox('test');
  }

  render() {
    const { animated } = this.state;
    return(
      <section
        className={cx({
          'content':        true,
          'animatedViews':  animated,
          'view-enter':     animated
        })}>
        {/* TODO */}
        <div
          className="row"
          style={{marginBottom: '5px'}}>


          <div className="col-md-3">
            <h3>
              mailbox panel
            </h3>
            <h4>
              comands
            </h4>
          </div>


          <div className="col-md-9">
            <h2>
              liste mail boite réception
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

MailboxReception.propTypes = {
  params: PropTypes.object, // react router
  location: PropTypes.object,  // react router

  inboxMailId: PropTypes.number,
  inboxIsFetching: PropTypes.bool,
  inbox: PropTypes.arrayOf(PropTypes.object),

  actions: PropTypes.shape({
    enterMailboxInbox: PropTypes.func,
    leaveMailboxInbox: PropTypes.func,
    fetchInboxContentIfNeeded: PropTypes.func
  })
};

export default MailboxReception;
