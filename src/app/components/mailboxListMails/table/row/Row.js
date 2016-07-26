import React, { PropTypes } from 'react';

const subjectMaxLength = 45;


const Row  = ({id, receptionDate, subject, from, to, body}) => {
  return (
    <tr id={id}>

      <td style={{width: '10px'}}>
        <input
          type="checkbox"
          checked={false}
          onChange={()=>console.log('onChange to implement')}
        />
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
  selected: PropTypes.bool.isRequired
};

export default Row;
