import React, { PropTypes } from 'react';
import { EditValidIcons } from '../../../components';
import Form from './form/Form';
import SavingIndicator from '../savingIndicator/SavingIndicator';

const Identite = ({
  isSavingIdentite,
  isEditingIdentite,
  onEditClick,
  onCancelEditClick,
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
            cancelEditing={onCancelEditClick}
            saveEdit={(e)=>console.log('TODO: Identite save Edit')}
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
  onCancelEditClick: PropTypes.func.isRequired,
  onCiviliteChange: PropTypes.func.isRequired
};


export default Identite;
