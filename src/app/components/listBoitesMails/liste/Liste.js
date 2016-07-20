import React, { PropTypes } from 'react';
import BoiteMail            from './boiteMail/BoiteMail';

const Liste = ({boitesMails}) => {
  return (
    <ul className="list-unstyled">
      {
        boitesMails.map(
          (boite, idx) => (
            <BoiteMail
              key={idx}
              id={boite.id}
              titre={boite.titre}
              receptionRoute={boite.receptionRoute}
              envoyesRoute={boite.envoyesRoute}
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
      titre: PropTypes.string.isRequired,
      receptionRoute: PropTypes.string.isRequired,
      envoyesRoute: PropTypes.string.isRequired
    })
  )
};

export default Liste;
