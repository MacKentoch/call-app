import React, {
  Component,
  PropTypes
}                           from 'react';
import shallowCompare       from 'react-addons-shallow-compare';
import Title                from './title/Title';
import Tools                from './tools/Tools';
import MailInfo             from './mailInfo/MailInfo';
import MailBody             from './mailBody/MailBody';
import Attachments          from './attachments/Attachments';


class MailboxConsultMail extends Component {
  constructor(props) {
    super(props);
    this.handesOnPrintClick = this.handesOnPrintClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { mail: {id, receptionDate, subject, from, to, body, attachments }} = this.props;
    return (
      <div className="panel">
        <div
          className="panel-body"
          style={{
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: '10px',
            paddingRight: '10px'
          }}>
          <div>
            <div className="no-print">
              <Title />
            </div>
            <div className="box-body no-padding">

              <div className="no-print">
                <Tools
                  onReplyClick={(e)=>console.log('onReplyClick')}
                  onForwardClick={(e)=>console.log('onForwardClick')}
                  onPrintClick={this.handesOnPrintClick}
                />
              </div>

              <MailInfo
                id={id}
                from={from.email}
                to={to.email}
                receptionDate={receptionDate}
                subject={subject}
              />

              <div className="mailbox-read-message">
                <MailBody
                  body={body}
                />
                <hr />
              </div>

            </div>

            <div className="box-footer">
              <Attachments
                attachments={attachments}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handesOnPrintClick(event) {
    event.preventDefault();
    window.print();
  }
}

MailboxConsultMail.propTypes = {
  mailId: PropTypes.number.isRequired,
  mailboxId: PropTypes.number.isRequired,
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
  })
};

export default MailboxConsultMail;
