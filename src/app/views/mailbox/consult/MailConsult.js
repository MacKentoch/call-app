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
    actions.fetchMailContentIfNeeded(mailId, mailboxId);
  }

  componentWillUnmount() {
    const  { actions, params: { mailboxId, mailId } } =  this.props;
    actions.leaveMailboxConsult(`mailbox #${mailboxId}, mailId: ${mailId}`);
  }

  render() {
    const { animated, isFetchingMailContent } = this.state;
    const { mailId, boiteMailId, mail } = this.props;

    return(
      <div
        className={cx({
          'animated': animated,
          'fadeIn': animated
        })}>
        {
          !isFetchingMailContent &&
          <MailboxConsultMail
            mailId={mailId}
            mailboxId={boiteMailId}
            mail={mail}
          />
        }
        {
          isFetchingMailContent &&
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
}

MailConsult.propTypes = {
  params: PropTypes.object, // react router
  location: PropTypes.object,  // react router


  isFetchingMailContent:PropTypes.bool.isRequired,
  mailId: PropTypes.number.isRequired,
  boiteMailId: PropTypes.number.isRequired,
  mailContentRefreshTime: PropTypes.string.isRequired,
  mail: PropTypes.shape({
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
    hasAttachments: PropTypes.bool.isRequired,
    attachments: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(['zip', 'rar', '7zip', 'pdf', 'txt', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'png', 'jpg', 'jpeg', 'bmp']),
        filename: PropTypes.string.isRequired,
        filePath: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired
      })
    )
  }),

  actions: PropTypes.shape({
    enterMailboxConsult: PropTypes.func,
    leaveMailboxConsult: PropTypes.func,

    fetchMailContentIfNeeded: PropTypes.func
  })
};

export default MailConsult;
