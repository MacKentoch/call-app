import React, { PropTypes } from 'react';
import BoiteMail            from './boiteMail/BoiteMail';

const Liste = ({boitesMails, boiteReceptionPath, boiteEnvoiPath}) => {
  return (
    <ul className="list-unstyled">
      {
        boitesMails.map(
          (boite, idx) => (
            <BoiteMail
              key={idx}
              id={boite.id}
              titre={boite.titre}
              receptionCount={boite.itemCount}
              boiteReceptionPath={boiteReceptionPath}
              boiteEnvoiPath={boiteEnvoiPath}
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
      itemCount: PropTypes.number.isRequired
    })
  ),
  boiteReceptionPath: PropTypes.string.isRequired,
  boiteEnvoiPath: PropTypes.string.isRequired
};

export default Liste;
