import React, { PropTypes } from 'react';
import { FormLabel }        from '../../../../components';

const Form = ({
  fixedPhone,
  mobilePhone,
  email,
  numAdress,
  voie,
  complementAdr,
  codePostal,
  ville,
  pays
}) => {
  return (
    <form role="form">

      {/* 1st row */}
      <div className="row">
        {/* fixedPhone */}
        <div className="col-md-6">
          <FormLabel
            id="inputFixedPhone"
            label={'Téléphone fixe'}
            value={fixedPhone || ' --- '}
          />
        </div>

        {/* mobilePhone */}
        <div className="col-md-6">
          <FormLabel
            id="inputMobilePhone"
            label={'Téléphone mobile'}
            value={mobilePhone}
          />
        </div>
      </div>

      {/* 2nd row */}
      <div className="row">
        {/* email */}
        <div className="col-md-12">
          <FormLabel
            id="inputEmail"
            label={'Adresse mail'}
            value={email}
          />
        </div>
      </div>

      {/* 2nd row */}
      <div className="row">
        {/* numAdress */}
        <div className="col-md-3">
          <FormLabel
            id="inputNumAdr"
            label={'N°'}
            value={numAdress}
          />
        </div>
        {/* voie */}
        <div className="col-md-5">
          <FormLabel
            id="inputVoie"
            label={'Voie'}
            value={voie}
          />
        </div>
        {/* complementAdr */}
        <div className="col-md-4">
          <FormLabel
            id="inputComplementAdr"
            label={'Complément'}
            value={complementAdr}
          />
        </div>
      </div>


      {/* 3rd row */}
      <div className="row">
        {/* codePostal */}
        <div className="col-md-3">
          <FormLabel
            id="inputCodePostal"
            label={'Code postal'}
            value={codePostal}
          />
        </div>
        {/* ville */}
        <div className="col-md-5">
          <FormLabel
            id="inputVille"
            label={'Ville'}
            value={ville}
          />
        </div>
        {/* pays */}
        <div className="col-md-4">
          <FormLabel
            id="inputPays"
            label={'Pays'}
            value={pays}
          />
        </div>
      </div>

    </form>
  );
};

Form.propTypes = {
  fixedPhone: PropTypes.string.isRequired,

  mobilePhone: PropTypes.string.isRequired,

  email: PropTypes.string.isRequired,

  numAdress: PropTypes.string.isRequired,

  voie: PropTypes.string.isRequired,

  complementAdr: PropTypes.string.isRequired,

  codePostal: PropTypes.string.isRequired,

  ville: PropTypes.string.isRequired,

  pays: PropTypes.string.isRequired
};

export default Form;
