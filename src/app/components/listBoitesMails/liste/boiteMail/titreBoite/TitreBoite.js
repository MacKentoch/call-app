import React, {PropTypes} from 'react';

const TitreBoite = ({titre}) => {
  return (
    <h4>
      <strong>
        <u>
          {titre}
        </u>
      </strong>
    </h4>
  );
};

TitreBoite.propTypes = {
  titre: PropTypes.string
};

TitreBoite.defaultProps = {
  titre: ''
};

export default TitreBoite;
