import React, { PropTypes } from 'react';
import { DoubleBounce }                 from 'better-react-spinkit';

const SavingIndicator = () => {
  return (
    <div
      className="center-block"
      style={{width: '120px', height: '100px'}}>
      <DoubleBounce
        size={50}
        color={'#ff7518'}
      />
    </div>
  );
};

export default SavingIndicator;
