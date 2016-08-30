import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {
  DropdownButton,
  MenuItem
}                     from 'react-bootstrap';

const civiliteEnum = [
  'M.',
  'Mme',
  'Mlle'
];

export const valueIsCivilite = (value) => {
  if (value) {
    const index = civiliteEnum.findIndex(
      valeur => value === valeur
    );
    return index > -1 ? true : false;
  }
  return false;
};

class CiviliteDropDown extends Component {
  constructor(props) {
    super(props);

    this.handlesOnChange = this.handlesOnChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { label, id, value } = this.props;
    return (
      <div className="form-group">
        <label
          className="control-label"
          htmlFor={id}>
          {label}
        </label>
        <div>
          <DropdownButton
            id={id}
            onSelect={this.handlesOnChange}
            bsSize="sm"
            bsStyle={'default'}
            title={ valueIsCivilite(value) ? value : civiliteEnum[0] }>
            {
              civiliteEnum.map(
                (civilite, idx) => {
                  return (
                    <MenuItem
                      key={idx}
                      eventKey={idx}>
                      {civilite}
                    </MenuItem>
                  );
                }
              )
            }
          </DropdownButton>
        </div>
      </div>
    );
  }

  handlesOnChange(event, key) {
    event.preventDefault();
    const { onChange } = this.props;

    onChange(civiliteEnum[key]);
  }
}

CiviliteDropDown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default CiviliteDropDown;
