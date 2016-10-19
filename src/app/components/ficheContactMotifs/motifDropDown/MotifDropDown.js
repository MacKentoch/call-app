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
    const { label, id, value, listMotifsRef, disabled } = this.props;
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
            disabled={disabled}
            bsStyle={'default'}
            title={ listMotifsRef[value] ? listMotifsRef[value] : ' sélectionner ' }>
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

  handlesOnChange(event, indexMotif) {
    event.preventDefault();
    const { onChange, motifLineIndex } = this.props;

    onChange({
      motifLineIndex,
      indexMotif
    });
  }

  valueIsMotif = (value) => {
    const { listMotifsRef } = this.props;

    if (value) {
      return ((value >= 0) && (value <= listMotifsRef.length))  ? true : false;
    }
    return false;
  };
}

MotifDropDown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  listMotifsRef: PropTypes.arrayOf(PropTypes.string).isRequired,
  motifLineIndex: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default MotifDropDown;
