import React, { PropTypes } from 'react';
import Chips                from '../../chips/Chips';

const To = ({destinataires, onDestinatairesChange}) => {
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
          onChipsChange={onDestinatairesChange}
          placeholder={'Ajouter un destinataire...'}
          max={50}
          maxlength={50}
        />
      </div>
    </div>
  );
};

To.propTypes = {
  destinataires: PropTypes.arrayOf(PropTypes.string),
  onDestinatairesChange: PropTypes.func.isRequired
};

export default To;
