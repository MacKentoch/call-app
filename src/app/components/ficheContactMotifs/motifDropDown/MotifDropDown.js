import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {
  DropdownButton,
  MenuItem
}                     from 'react-bootstrap';

class MotifDropDown extends Component {
  constructor(props) {
    super(props);

    this.handlesOnChange = this.handlesOnChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { label, id, value, listMotifsRef } = this.props;
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
            title={ this.valueIsMotif(value) ? value : ' sélectionner ' }>
            {
              listMotifsRef.map(
                (motif, idx) => {
                  return (
                    <MenuItem
                      key={idx}
                      eventKey={idx}>
                      {motif}
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
    // const { onChange, listMotifsRef } = this.props;
    // onChange(listMotifsRef[key]);
    onChange(key);
  }

  valueIsMotif = (value) => {
    const { listMotifsRef } = this.props;
    if (value) {
      const index = listMotifsRef.findIndex(
        valeur => value === valeur
      );
      return index > -1 ? true : false;
    }
    return false;
  };
}

MotifDropDown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  listMotifsRef: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MotifDropDown;
