import React, { PropTypes } from 'react';

const MailInfo = ({}) => {
  return (
    <div className="mailbox-read-info">
      <h5>
        De: demo@demo.com
        <span className="mailbox-read-time pull-right"  >
          15 février 2015 11:03
        </span>
      </h5>
      <h5>
        A: demo@demo.com
      </h5>
      <hr />
      <h3>
        Sujet du mail ici
      </h3>
      <hr />
    </div>
  );
};

export default MailInfo;
