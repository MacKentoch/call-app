import React, { PropTypes } from 'react';
import {
  CiviliteDropDown,
  FormLabel
}                           from '../../../../components';


const Form = ({
  isEditingIdentite,
  civilite,
  onCiviliteChange,
  nom,
  onNomChanged,
  nomJeuneFille,
  onNomJeuneFilleChanged,
  prenom,
  onPrenomChanged,
  dateNaissance,
  onDateNaissanceChanged,
  numss,
  onNumssChanged,
  dateDeces,
  onDateDecesChanged,
  maritalStatus,
  onMaritalStatusChanged
}) => {
  console.log('isEditingIdentite: ', isEditingIdentite);
  return (
    <form role="form">

      <div className="row">
        <div className="col-md-4">
          {
            isEditingIdentite
            ?
              <CiviliteDropDown
                id="inputCivilite"
                label={'Civilité'}
                value={civilite}
                onChange={onCiviliteChange}
              />
            :
              <FormLabel
                id="inputCivilite"
                label={'Civilité'}
                value={civilite}
              />
          }
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label
              htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label
              htmlFor="exampleInputOther">
              Other
            </label>
            <input
              type="other"
              className="form-control"
              id="exampleInputOther"
              placeholder="other"
            />
          </div>
        </div>
      </div>

    </form>
  );
};

Form.propTypes = {
  isEditingIdentite: PropTypes.bool,

  civilite: PropTypes.string.isRequired,
  onCiviliteChange: PropTypes.func.isRequired,

  nom: PropTypes.string.isRequired,
  onNomChanged: PropTypes.func.isRequired,

  nomJeuneFille: PropTypes.string.isRequired,
  onNomJeuneFilleChanged: PropTypes.func.isRequired,

  prenom: PropTypes.string.isRequired,
  onPrenomChanged: PropTypes.func.isRequired,

  dateNaissance: PropTypes.string.isRequired,
  onDateNaissanceChanged: PropTypes.func.isRequired,

  numss: PropTypes.string.isRequired,
  onNumssChanged: PropTypes.func.isRequired,

  dateDeces: PropTypes.string.isRequired,
  onDateDecesChanged: PropTypes.func.isRequired,

  maritalStatus: PropTypes.string.isRequired,
  onMaritalStatusChanged: PropTypes.func.isRequired
};

export default Form;
