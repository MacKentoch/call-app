import React, { PropTypes } from 'react';
import Row from './row/Row';

const Table  = ({inbox}) => {
  return (
    <table className="table table-hover">
      <tbody>
        {
          inbox.map(
            ({id, receptionDate, subject, from, to}, mailIdx) => {
              return (
                <Row
                  key={mailIdx}
                  id={id}
                  receptionDate={receptionDate}
                  subject={subject}
                  from={from}
                  to={to}
                />
              );
            }
          )
        }
      </tbody>
    </table>
  );
};

Table.propTypes = {
  inbox: PropTypes.arrayOf(
    PropTypes.shape({
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
      body: PropTypes.string.isRequired
    })
  )
};

export default Table;
