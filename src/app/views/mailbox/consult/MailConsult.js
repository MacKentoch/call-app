import React, { PropTypes, Component }  from 'react';
import moment                           from 'moment';
// import { appConfig }                    from '../../../config';
import cx                               from 'classnames';
import {
  MailboxConsultMail,
  IsFetching
}                                       from '../../../components';

moment.locale('fr');

// const formatDate = appConfig.formatDate.defaut;

class MailConsult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions, params: { mailboxId, mailId } } =  this.props;
    actions.enterMailboxConsult(`mailbox #${mailboxId}, mailId: ${mailId}`);
  }

  componentWillUnmount() {
    const  { actions, params: { mailboxId, mailId } } =  this.props;
    actions.leaveMailboxConsult(`mailbox #${mailboxId}, mailId: ${mailId}`);
  }

  render() {
    const { animated } = this.state;
    return(
      <div
        className={cx({
          'animated': animated,
          'fadeIn': animated
        })}>
        {
          // (sentbox.length > 0 && !sentboxIsFetching) &&
          <MailboxConsultMail />
        }
        {
          // sentboxIsFetching &&
          // <div>
          //   <p className="text-center">
          //     <i style={{color: '#4A4A4A'}}>
          //       Chargement...
          //     </i>
          //   </p>
          //   <IsFetching />
          // </div>
        }
      </div>
    );
  }
}

MailConsult.propTypes = {
  params: PropTypes.object, // react router
  location: PropTypes.object,  // react router

  mail: PropTypes.shape({
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
  }),

  actions: PropTypes.shape({
    enterMailboxConsult: PropTypes.func,
    leaveMailboxConsult: PropTypes.func
  })
};

export default MailConsult;
