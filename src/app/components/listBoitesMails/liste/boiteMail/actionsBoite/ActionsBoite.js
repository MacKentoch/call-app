import React, { PropTypes } from 'react';

const ActionsBoite = ({}) => {
  return (
    <ul
      style={{
        borderLeftColor: '#F4F4F4',
        borderLeftWidth: '1px',
        borderLeftStyle: 'outset'
      }}
      className="list-unstyled">
      <li
        style={{
          paddingLeft: '15px'
        }}>
        <i className="fa fa-inbox" aria-hidden="true"></i>
        &nbsp;
        Boîte de réception
      </li>
      <li
        style={{
          paddingLeft: '15px'
        }}>
        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
        &nbsp;
        Envoyés
      </li>
    </ul>
  );
};

ActionsBoite.propTypes = {
  boiteId: PropTypes.number,
  receptionRoute: PropTypes.string,
  envoyesRoute: PropTypes.string
};

export default ActionsBoite;
