import React, { PropTypes, Component }  from 'react';
import moment                           from 'moment';
import { appConfig }                    from '../../../config';
import cx                               from 'classnames';
import {
  MailboxConsultMail,
  IsFetching
}                                       from '../../../components';

moment.locale('fr');
// const formatDate = appConfig.formatDate.defaut;

const replyUrl = `${appConfig.views.mailbox.root.path}/${appConfig.views.mailbox.reply.path}`;

class MailConsult extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      animated: true
    };

    this.handlesOnReplyMail = this.handlesOnReplyMail.bind(this);
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
          mail.id > 0 && !isFetchingMailContent &&
          <MailboxConsultMail
            mailId={mailId}
            mailboxId={boiteMailId}
            mail={mail}
            onReplyMail={this.handlesOnReplyMail}
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

  handlesOnReplyMail(event) {
    event.preventDefault();

    const { router } = this.context;
    const { params: { mailboxId, mailId } } =  this.props;
    // all mailbox subroute need mailboxId param. Additionnal parameters go in query.
    router.push({
      pathname: `${replyUrl}/${mailboxId}`,
      query: {
        mailId
      }
    });
  }
}


MailConsult.contextTypes = {
  // for manual routing
  router: React.PropTypes.object.isRequired
};

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
        name: PropTypes.string.isRequired,
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
