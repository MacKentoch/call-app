import React, { PropTypes } from 'react';
import {
  EditValidIcons
}                           from '../../../components';
import Form                 from './form/Form';
import SavingIndicator      from '../savingIndicator/SavingIndicator';
import Collapse             from 'react-collapse';


const Contact = ({
  onSaveFormContact,
  isCollapsedContact,
  onCollapseClick,
  isSavingContact,
  isEditingContact,
  onEditClick,
  onCancelEditClick,
  fixedPhone,
  onFixedPhoneChanged,
  mobilePhone,
  onMobilePhoneChanged,
  email,
  onEmailChanged,
  numAdress,
  onNumAdressChanged,
  voie,
  onVoieChanged,
  complementAdr,
  onComplementAdrChanged,
  codePostal,
  onCodePostalChanged,
  ville,
  onVilleChanged,
  pays,
  onPaysChanged
}) => {
  return (
      <div>
        <div className="page-header">
          Identité
          {
            !isSavingContact &&
            <EditValidIcons
              isEditing={isEditingContact}
              setEdit={onEditClick}
              cancelEditing={onCancelEditClick}
              saveEdit={onSaveFormContact}
              isCollapsed={isCollapsedContact}
              toggleCollapse={onCollapseClick}
            />
          }
        </div>
        <Collapse
          isOpened={!isCollapsedContact}
          keepCollapsedContent={false}>
          <div style={{ height: '230px' }}>
          {
            isSavingContact
            ?
              <SavingIndicator />
            :
              <Form
                isEditingContact={isEditingContact}
                fixedPhone={fixedPhone}
                onFixedPhoneChanged={onFixedPhoneChanged}
                mobilePhone={mobilePhone}
                onMobilePhoneChanged={onMobilePhoneChanged}
                email={email}
                onEmailChanged={onEmailChanged}
                numAdress={numAdress}
                onNumAdressChanged={onNumAdressChanged}
                voie={voie}
                onVoieChanged={onVoieChanged}
                complementAdr={complementAdr}
                onComplementAdrChanged={onComplementAdrChanged}
                codePostal={codePostal}
                onCodePostalChanged={onCodePostalChanged}
                ville={ville}
                onVilleChanged={onVilleChanged}
                pays={pays}
                onPaysChanged={onPaysChanged}
              />
          }
          </div>
        </Collapse>
      </div>

  );
};

Contact.propTypes = {
  onSaveFormContact: PropTypes.func.isRequired,
  isSavingContact: PropTypes.bool.isRequired,

  isEditingContact: PropTypes.bool.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onCancelEditClick: PropTypes.func.isRequired,

  isCollapsedContact: PropTypes.bool.isRequired,
  onCollapseClick: PropTypes.func.isRequired,

  fixedPhone: PropTypes.string.isRequired,
  onFixedPhoneChanged: PropTypes.func.isRequired,

  mobilePhone: PropTypes.string.isRequired,
  onMobilePhoneChanged: PropTypes.func.isRequired,

  email: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,

  numAdress: PropTypes.string.isRequired,
  onNumAdressChanged: PropTypes.func.isRequired,

  voie: PropTypes.string.isRequired,
  onVoieChanged: PropTypes.func.isRequired,

  complementAdr: PropTypes.string.isRequired,
  onComplementAdrChanged: PropTypes.func.isRequired,

  codePostal: PropTypes.string.isRequired,
  onCodePostalChanged: PropTypes.func.isRequired,

  ville: PropTypes.string.isRequired,
  onVilleChanged: PropTypes.func.isRequired,

  pays: PropTypes.string.isRequired,
  onPaysChanged: PropTypes.func.isRequired
};


export default Contact;
