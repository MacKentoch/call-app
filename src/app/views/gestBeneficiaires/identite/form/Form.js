import React, { PropTypes } from 'react';
import {
  CiviliteDropDown,
  FormLabel
}                           from '../../../../components';


const Form = ({isEditingIdentite, onCiviliteChange}) => {
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
                value={''}
                onChange={onCiviliteChange}
              />
            :
              <FormLabel />
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
  onCiviliteChange: PropTypes.func.isRequired
};

export default Form;
