import React, { PropTypes } from 'react';
import cx                   from 'classnames';

const subjectMaxLength = 45;


const Row  = ({id, notRead, mailboxType, receptionDate, subject, from}) => {
  return (
    <tr id={id}>

      {/*<td style={{width: '10px'}}>
        <input
          type="checkbox"
          checked={selected}
          onChange={()=>console.log('onChange to implement')}
        />
      </td>*/}

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
        <a href="#">
          {from.email}
        </a>
      </td>

      <td className="mailbox-subject">
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
      </td>

      <td style={{width: '10px'}}>
        <i className="fa fa-paperclip" aria-hidden="true"></i>
      </td>

      <td style={{width: '150px'}}>
        {receptionDate}
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
