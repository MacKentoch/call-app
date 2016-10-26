import React, { PropTypes } from 'react';
import Row from './row/Row';

const Table  = ({userMailsBoxes, onRowClick}) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>
            Boîte mail
          </th>

          <th>
            Mails reçus non lus
          </th>

        </tr>
      </thead>
      <tbody>
        {
          userMailsBoxes.map(
            ({
              id,
              name,
              linkTo,
              itemCount
            },
            mailBoxIdx) => {
              return (
                <Row
                  key={mailBoxIdx}
                  onRowClick={onRowClick}
                  id={id}
                  name={name}
                  linkTo={linkTo}
                  unReadsCount={itemCount}
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
  onRowClick: PropTypes.func.isRequired,

  userMailsBoxes: PropTypes.arrayOf(
    PropTypes.shape({
      // generic
      id: PropTypes.number.isRequired,
      titre: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      faIcoName: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired,
      itemCount: PropTypes.number.isRequired
    })
  )
};

export default Table;
