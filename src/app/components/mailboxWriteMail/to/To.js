import React, { PropTypes } from 'react';
import Chips                from '../../chips/Chips';

const To = ({destinataires}) => {
  return (
    <div className="form-group">
      <label
        className="control-label pull-left"
        style={{
          with: '60px',
          marginTop: '8px'
        }}>
        A:
      </label>
      <div className="">
        <Chips
          chips={destinataires}
          placeholder={'Ajouter un destinataire...'}
          max={50}
          maxlength={50}
        />
      </div>
    </div>
  );
};

To.propTypes = {
  destinataires: PropTypes.arrayOf(PropTypes.string)
};

export default To;
