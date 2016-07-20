import React, { PropTypes } from 'react';
import BoiteMail            from './boiteMail/BoiteMail';

const Liste = ({boitesMails, onReceptionClick, onEnvoyesClick}) => {
  return (
    <ul className="list-unstyled">
      {
        boitesMails.map(
          (boite, idx) => (
            <BoiteMail
              key={idx}
              id={boite.id}
              titre={boite.titre}
              onReceptionClick={onReceptionClick}
              onEnvoyesClick={onEnvoyesClick}
            />
          )
        )
      }
    </ul>
  );
};

Liste.propTypes = {
  boitesMails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titre: PropTypes.string.isRequired
    })
  ),
  onReceptionClick: PropTypes.func.isRequired,
  onEnvoyesClick: PropTypes.func.isRequired
};

export default Liste;
