import React, {PropTypes} from 'react';

const TitreBoite = ({titre}) => {
  return (
    <h4>
      <i
        className="fa fa-inbox"
        aria-hidden="true">    
      </i>
      &nbsp;
      <strong>
        {titre}
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
