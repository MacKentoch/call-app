import React, { PropTypes } from 'react';
import { EditValidIcons } from '../../../components';
import Form from './form/Form';
import SavingIndicator from '../savingIndicator/SavingIndicator';

const Identite = ({
  isSavingIdentite,
  isEditingIdentite,
  onEditClick,
  onCiviliteChange
}) => {
  return (
    <div>
      <div className="page-header">
        Identité
        {
          !isSavingIdentite &&
          <EditValidIcons
            isEditing={isEditingIdentite}
            setEdit={onEditClick}
            saveEdit={(e)=>console.log('TODO: Identite save Edit')}
            cancelEditing={(e)=>console.log('TODO: Identite cancel Edit')}
          />
        }
      </div>
      <div>
      {
        isSavingIdentite
        ?
          <SavingIndicator />
        :
          <Form
            isEditingIdentite={isSavingIdentite}
            onCiviliteChange={onCiviliteChange}
          />
      }
      </div>
    </div>
  );
};

Identite.propTypes = {
  isSavingIdentite: PropTypes.bool.isRequired,
  isEditingIdentite: PropTypes.bool.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onCiviliteChange: PropTypes.func.isRequired
};


export default Identite;
