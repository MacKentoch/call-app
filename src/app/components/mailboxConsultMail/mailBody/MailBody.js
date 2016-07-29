import React, { PropTypes } from 'react';

const MailBody = ({body}) => {
  return (
    <div
      dangerouslySetInnerHTML={{__html: body}}>
    </div>
  );
};

MailBody.propTypes = {
  body: PropTypes.string
};

export default MailBody;
