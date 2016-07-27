import React, { PropTypes } from 'react';
import { Link }              from 'react-router';
// import cx                   from 'classnames';

const subjectMaxLength = 45;


const Row  = ({id, notRead, mailboxType, receptionDate, subject, from}) => {
  return (
    <tr
      id={id}
      style={{cursor: 'pointer'}}>
      <td>
          {
            (mailboxType !== 'Reçus') || (mailboxType === 'Reçus' && !notRead) &&
            <span>&nbsp;</span>
          }
          {
            mailboxType === 'Reçus' && notRead &&
              <i
                className="fa fa-circle"
                aria-hidden="true"
                style={{color:'#E67E22'}}>
              </i>
          }
      </td>

      <td style={{width: '240px'}}>
        {from.email}
      </td>

      <td className="mailbox-subject">
        <Link to="/">
          <b>
            {
              subject.length > subjectMaxLength &&
              `${subject.slice(0, subjectMaxLength)}...`
            }
            {
              subject.length <= subjectMaxLength &&
              subject
            }
          </b>
        </Link>
      </td>

      <td style={{width: '10px'}}>
        <Link to="/">
          <i className="fa fa-paperclip" aria-hidden="true"></i>
        </Link>
      </td>

      <td style={{width: '150px'}}>
        <Link to="/">
          {receptionDate}
        </Link>
      </td>
    </tr>
  );
};

Row.propTypes = {
  mailboxType: PropTypes.oneOf(['Reçus', 'Envoyés']).isRequired,
  id: PropTypes.number.isRequired,
  notRead: PropTypes.bool.isRequired,
  receptionDate: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  to: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

export default Row;
