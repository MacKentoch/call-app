import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {
  DropdownButton,
  MenuItem
}                     from 'react-bootstrap';

const canalEnum = [
  'M.',
  'Mme',
  'Mlle'
];

class CanalDropDown extends Component {
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
            title={ this.valueIsCanal(value) ? value : canalEnum[0] }>
            {
              canalEnum.map(
                (canal, idx) => {
                  return (
                    <MenuItem
                      key={idx}
                      eventKey={idx}>
                      {canal}
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
    onChange(canalEnum[key]);
  }

  valueIsCanal(value) {
    if (value) {
      const index = canalEnum.findIndex(
        valeur => value === valeur
      );
      return index > -1 ? true : false;
    }
    return false;
  }
}

CanalDropDown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default CanalDropDown;
