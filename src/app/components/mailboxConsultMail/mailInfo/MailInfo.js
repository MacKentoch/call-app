import React, { PropTypes } from 'react';

const MailInfo = ({from, to, receptionDate, subject}) => {
  return (
    <div className="mailbox-read-info">
      <h5>
        <span style={{marginRight: '1px'}}>
          De:
        </span>
        &nbsp;
        {from}
        <span className="mailbox-read-time pull-right"  >
          reçu le:
          &nbsp;
          {receptionDate}
        </span>
      </h5>
      <h5>
        <span style={{marginRight: '10px'}}>
          A:
        </span>
        &nbsp;
        {to}
      </h5>
      <hr />
      <h3>
        {subject}
      </h3>
      <hr />
    </div>
  );
};

MailInfo.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  receptionDate: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired
};

export default MailInfo;
