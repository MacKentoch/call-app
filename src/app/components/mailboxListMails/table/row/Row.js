import React, { PropTypes } from 'react';

const Row  = ({id, receptionDate, subject, from, to}) => {
  return (
    <tr id={id}>

      <td className="mailbox-star">
        <a href="#">
          <i className="fa fa-star text-yellow"></i>
        </a>
      </td>

      <td className="mailbox-name">
        <a href="#">
          {from.name}
        </a>
      </td>

      <td className="mailbox-subject">
        <b>{subject}</b>
      </td>

      <td className="mailbox-attachment"></td>

      <td className="mailbox-date">
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
  }).isRequired
};

export default Row;
