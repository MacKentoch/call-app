import React, { PropTypes } from 'react';
import moment               from 'moment';
// import { appConfig }        from '../../../../config';
import {
  FormLabel,
  TextInput
}                           from '../../../../components';

moment.locale('fr');
// const formatDate = appConfig.formatDate.defaut;

const Form = ({
  isEditingContact,
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
    <form role="form">

      {/* 1st row */}
      <div className="row">
        {/* fixedPhone */}
        <div className="col-md-6">
          {
            isEditingContact
            ?
              <TextInput
                id="inputFixedPhone"
                label={'Téléphone fixe'}
                value={fixedPhone}
                onChange={onFixedPhoneChanged}
              />
            :
              <FormLabel
                id="inputFixedPhone"
                label={'Téléphone fixe'}
                value={fixedPhone || ' --- '}
              />
          }
        </div>
        {/* mobilePhone */}
        <div className="col-md-6">
          {
            isEditingContact
            ?
              <TextInput
                id="inputMobilePhone"
                label={'Téléphone mobile'}
                value={mobilePhone}
                onChange={onMobilePhoneChanged}
              />
            :
              <FormLabel
                id="inputMobilePhone"
                label={'Téléphone mobile'}
                value={mobilePhone}
              />
          }
        </div>
      </div>

      {/* 2nd row */}
      <div className="row">
        {/* email */}
        <div className="col-md-12">
          {
            isEditingContact
            ?
              <TextInput
                id="inputEmail"
                label={'Adresse mail'}
                value={email}
                onChange={onEmailChanged}
              />
            :
              <FormLabel
                id="inputEmail"
                label={'Adresse mail'}
                value={email}
              />
          }
        </div>
      </div>

      {/* 2nd row */}
      <div className="row">
        {/* numAdress */}
        <div className="col-md-3">
          {
            isEditingContact
            ?
              <TextInput
                id="inputNumAdr"
                label={'N°'}
                value={numAdress}
                onChange={onNumAdressChanged}
              />
            :
              <FormLabel
                id="inputNumAdr"
                label={'N°'}
                value={numAdress}
              />
          }
        </div>
        {/* voie */}
        <div className="col-md-5">
          {
            isEditingContact
            ?
              <TextInput
                id="inputVoie"
                label={'Voie'}
                value={voie}
                onChange={onVoieChanged}
              />
            :
              <FormLabel
                id="inputVoie"
                label={'Voie'}
                value={voie}
              />
          }
        </div>
        {/* complementAdr */}
        <div className="col-md-4">
          {
            isEditingContact
            ?
              <TextInput
                id="inputComplementAdr"
                label={'Complément'}
                value={complementAdr}
                onChange={onComplementAdrChanged}
              />
            :
              <FormLabel
                id="inputComplementAdr"
                label={'Complément'}
                value={complementAdr}
              />
          }
        </div>
      </div>


      {/* 3rd row */}
      <div className="row">
        {/* codePostal */}
        <div className="col-md-3">
          {
            isEditingContact
            ?
              <TextInput
                id="inputCodePostal"
                label={'Code postal'}
                value={codePostal}
                onChange={onCodePostalChanged}
              />
            :
              <FormLabel
                id="inputCodePostal"
                label={'Code postal'}
                value={codePostal}
              />
          }
        </div>
        {/* ville */}
        <div className="col-md-5">
          {
            isEditingContact
            ?
              <TextInput
                id="inputVille"
                label={'Ville'}
                value={ville}
                onChange={onVilleChanged}
              />
            :
              <FormLabel
                id="inputVille"
                label={'Ville'}
                value={ville}
              />
          }
        </div>
        {/* pays */}
        <div className="col-md-4">
          {
            isEditingContact
            ?
              <TextInput
                id="inputPays"
                label={'Pays'}
                value={pays}
                onChange={onPaysChanged}
              />
            :
              <FormLabel
                id="inputPays"
                label={'Pays'}
                value={pays}
              />
          }
        </div>
      </div>

    </form>
  );
};

Form.propTypes = {
  isEditingContact: PropTypes.bool,

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

export default Form;
